import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AvailableSettingsResult } from "./availablesettingsresult";


export class SkuInfoResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableSettings" })
  availableSettings?: AvailableSettingsResult;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=os" })
  os?: string;
}
