import { useState } from 'react';
import { CLUB } from './data.js';

export const fmtDate = (d) => d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

export const initials = (name) =>
  name.replace(/^(Dr|Prof)\.\s*/, '').split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();

// Splits events into past (oldest first, so the timeline flows into upcoming) and upcoming (soonest first).
export function splitEvents(events, now = Date.now()) {
  const all = events.map((e) => ({ ...e, t: new Date(e.date) })).sort((a, b) => a.t - b.t);
  return {
    past: all.filter((e) => e.t < now),
    upcoming: all.filter((e) => e.t >= now)
  };
}

// Posts a form to Netlify Forms. Throws if the submission fails.
export async function submitNetlifyForm(form) {
  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(new FormData(form)).toString()
  });
  if (!res.ok) throw new Error('Form submit failed: ' + res.status);
}

// Submit handler + status message for a Netlify form.
export function useNetlifyForm(successMessage, onSuccess) {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setStatus('Sending…');
    try {
      await submitNetlifyForm(form);
      form.reset();
      onSuccess?.();
      setStatus(successMessage);
    } catch {
      setStatus('Could not send right now. Please try again, or email us at ' + CLUB.email + '.');
    }
    setSending(false);
  };
  return { status, sending, onSubmit };
}
