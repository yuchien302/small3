import AwesomeComponent from "AwesomeComponent";
import { enable_awesome_component } from "feature_flag";

export default function CardC() {
  if (enable_awesome_component) {
    return <AwesomeComponent />;
  }
  // 123
  return null;
}
