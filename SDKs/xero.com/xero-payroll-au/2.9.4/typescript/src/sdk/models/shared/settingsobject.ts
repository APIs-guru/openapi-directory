import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Settings } from "./settings";


export class SettingsObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=Settings" })
  settings?: Settings;
}
