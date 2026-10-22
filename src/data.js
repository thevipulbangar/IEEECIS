/* ================= EDIT YOUR CLUB CONTENT HERE ================= */

export const CLUB = {
  name: 'IEEE CIS',
  place: 'VIT Pune',
  email: 'ieeecis@vit.edu',                                       // TODO: real email
  instagramHandle: '@ieeecis_vitpune',                            // TODO: real handle
  instagram: 'https://www.instagram.com/ieeecis_vitpune/',        // TODO
  linkedinName: 'IEEE CIS VIT Pune',
  linkedin: 'https://www.linkedin.com/company/ieeecis-vitpune/',  // TODO
  address: 'VIT Pune, Bibwewadi, Pune 411037'
};

export const STATS = [
  { n: '150+', label: 'Members' },
  { n: '25+', label: 'Events held' },
  { n: '12', label: 'Papers published' },
  { n: '3', label: 'Years active' }
];

export const ACTIVITIES = [
  { title: 'Workshops & Bootcamps', text: 'Hands-on sessions on ML, deep learning and computational intelligence, run by members and mentors.' },
  { title: 'Hackathons & Projects', text: 'Team projects and hackathons where members ship real tools and research prototypes.' },
  { title: 'Research Circles', text: 'Paper-reading groups and mentored research that help students publish at IEEE venues.' },
  { title: 'Expert Talks', text: 'Guest lectures from researchers and engineers in industry and academia.' },
  { title: 'Competitions', text: 'Coding contests, Kaggle challenges and quiz nights.' },
  { title: 'FutureTech Conference', text: 'Our flagship annual conference on computational intelligence.' }
];

// One list for all events. Events whose date has passed show under "Executed Events"
// automatically; future ones show under "Upcoming" with a countdown to the nearest one.
// summary: result line shown once the event is over.
export const EVENTS = [
  { title: 'Intro to Machine Learning Bootcamp', date: '2026-02-14T10:00:00+05:30', venue: 'Seminar Hall A', type: 'Workshop', text: 'Two-day bootcamp covering Python, NumPy and scikit-learn from scratch.', summary: '120+ participants' },
  { title: 'CodeSynapse Hackathon', date: '2026-04-11T09:00:00+05:30', venue: 'Main Auditorium', type: 'Hackathon', text: '24-hour hackathon on AI for social good.', summary: '40 teams, 6 projects incubated' },
  { title: 'Talk: Careers in AI Research', date: '2026-08-22T15:00:00+05:30', venue: 'Online', type: 'Talk', text: 'Fireside chat with alumni working in AI research labs.', summary: '200+ attendees' },
  { title: 'Kaggle Kickoff Challenge', date: '2026-09-19T10:00:00+05:30', venue: 'Computer Lab 3', type: 'Competition', text: 'Team data-science challenge with mentors on hand.', summary: '35 teams competed' },
  { title: 'Deep Learning with PyTorch Workshop', date: '2026-11-08T10:00:00+05:30', venue: 'Seminar Hall B', type: 'Workshop', text: 'Build and train your first neural network. Bring a laptop.' },
  { title: 'IEEE CIS FutureTech 2026', date: '2026-11-20T09:00:00+05:30', venue: 'VIT Pune Campus', type: 'Conference', text: 'Our flagship three-day conference on computational intelligence.' },
  { title: 'GenAI Hackathon', date: '2026-12-12T09:00:00+05:30', venue: 'Main Auditorium', type: 'Hackathon', text: '24 hours to build something useful with generative AI.' }
];

// photo: optional, put the image in public/team/ and write '/team/name.jpg'. linkedin: optional profile URL.
export const TEAM = [
  { name: 'Member Name', role: 'Chairperson', info: 'Final Year, Computer Engg.' },
  { name: 'Member Name', role: 'Vice Chairperson', info: 'Third Year, AI & DS' },
  { name: 'Member Name', role: 'Secretary', info: 'Third Year, IT' },
  { name: 'Member Name', role: 'Treasurer', info: 'Third Year, E&TC' },
  { name: 'Member Name', role: 'Technical Head', info: 'Third Year, Computer Engg.' },
  { name: 'Member Name', role: 'Events Head', info: 'Second Year, AI & DS' },
  { name: 'Member Name', role: 'Design Head', info: 'Second Year, IT' },
  { name: 'Dr. Faculty Name', role: 'Faculty Advisor', info: 'Dept. of Computer Engg.' }
];
