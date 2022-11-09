import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlanResourceIdentity } from "./planresourceidentity";
import { PlanResourceProperties } from "./planresourceproperties";


export class PlanResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=identity" })
  identity?: PlanResourceIdentity;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: PlanResourceProperties;

  @Metadata({ data: "json, name=provisioningState" })
  provisioningState?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
