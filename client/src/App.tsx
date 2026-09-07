/* Ground-truth parity migration: the uploaded MEDHA application remains the source of truth; this entrypoint only mounts it natively in React. */
import LegacyMedhaApp from "./components/LegacyMedhaApp";

export default function App() {
  return <LegacyMedhaApp />;
}
