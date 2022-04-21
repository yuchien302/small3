import { getA } from "utilA";
import { getB } from "utilB";

export default function AwesomeComponent() {
  const a = getA();
  const b = getB();
  return <div>{a + b} testing lalala add styles</div>;
}
