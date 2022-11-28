import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AvailableSettingsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string[];
}
