import AwesomeComponent from "AwesomeComponent";
import { enable_awesome_component } from "feature_flag";

export default function CardB() {
  if (enable_awesome_component) {
    return <AwesomeComponent />;
  }
  return null;
}
