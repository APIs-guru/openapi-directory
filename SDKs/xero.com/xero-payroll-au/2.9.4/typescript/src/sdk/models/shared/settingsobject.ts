import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Settings } from "./settings";



export class SettingsObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: Settings;
}
