import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlanResource } from "./planresource";



export class PlanResourceList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value", elemType: PlanResource })
  value?: PlanResource[];
}
