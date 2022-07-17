import AwesomeComponent from "AwesomeComponent";
import { enable_awesome_component } from "feature_flag";

// CardA is in2122g AAA 123123
export default function CardA() {
  if (enable_awesome_component) {
    return <AwesomeComponent />;
  }
  return null;
}
