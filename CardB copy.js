import AwesomeComponent from "AwesomeComponent";
import { enable_awesome_component } from "feature_flag";

// CardB is doing BBB
export default function CardB() {
  if (enable_awesome_component) {
    return <AwesomeComponent />;
  }
  return null;
}
