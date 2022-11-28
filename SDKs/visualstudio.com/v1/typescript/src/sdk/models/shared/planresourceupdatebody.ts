import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlanResourceIdentity } from "./planresourceidentity";
import { PlanResourceProperties } from "./planresourceproperties";



export class PlanResourceUpdateBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: PlanResourceIdentity;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: PlanResourceProperties;
}
