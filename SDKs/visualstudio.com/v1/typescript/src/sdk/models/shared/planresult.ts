import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlanResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceGroup" })
  resourceGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: string;
}
