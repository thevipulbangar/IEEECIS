// A small feed-forward network drawn in SVG. Lines draw in once on load (see .motif in styles.css).
const LAYERS = [3, 5, 5, 2];
const W = 520, H = 420, PAD = 40;

const nodes = LAYERS.map((count, l) =>
  Array.from({ length: count }, (_, i) => ({
    x: PAD + (l * (W - 2 * PAD)) / (LAYERS.length - 1),
    y: PAD + ((i + 0.5) * (H - 2 * PAD)) / count
  }))
);

const edges = nodes.slice(1).flatMap((layer, l) =>
  layer.flatMap((b) => nodes[l].map((a) => ({ a, b, l })))
);

export default function NeuralMotif() {
  return (
    <svg className="motif" viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
      {edges.map(({ a, b, l }, i) => (
        <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} pathLength="1" style={{ '--d': l * 0.35 + 's' }} />
      ))}
      {nodes.flatMap((layer, l) =>
        layer.map((n, i) => <circle key={`${l}-${i}`} cx={n.x} cy={n.y} r={l === LAYERS.length - 1 ? 9 : 6} style={{ '--d': l * 0.35 + 0.2 + 's' }} />)
      )}
    </svg>
  );
}
