import AwesomeComponent from "AwesomeComponent";
import { enable_awesome_component } from "feature_flag";

// CardA is in2123123312g AAA 123
export default function CardA() {
  if (enable_awesome_component) {
    return <AwesomeComponent />;
  }
  return null;
}
