import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlanResourceIdentity } from "./planresourceidentity";
import { PlanResourceProperties } from "./planresourceproperties";


export class PlanResourceUpdateBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=identity" })
  identity?: PlanResourceIdentity;

  @Metadata({ data: "json, name=properties" })
  properties?: PlanResourceProperties;
}
