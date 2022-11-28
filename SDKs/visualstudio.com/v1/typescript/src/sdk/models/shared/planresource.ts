import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlanResourceIdentity } from "./planresourceidentity";
import { PlanResourceProperties } from "./planresourceproperties";



export class PlanResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: PlanResourceIdentity;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: PlanResourceProperties;

  @SpeakeasyMetadata({ data: "json, name=provisioningState" })
  provisioningState?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
