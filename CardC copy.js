import AwesomeComponent from "AwesomeComponent";
import { enable_awesome_component } from "feature_flag";

// CardC is doing CCC
export default function CardC() {
  if (enable_awesome_component) {
    return <AwesomeComponent />;
  }
  return null;
}
