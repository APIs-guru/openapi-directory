import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailableSettingsResult } from "./availablesettingsresult";



export class SkuInfoResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableSettings" })
  availableSettings?: AvailableSettingsResult;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os?: string;
}
