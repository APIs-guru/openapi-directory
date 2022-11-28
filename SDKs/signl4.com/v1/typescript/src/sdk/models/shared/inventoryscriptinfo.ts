import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScriptDescriptionData } from "./scriptdescriptiondata";
import { ScriptLocalizationDetail } from "./scriptlocalizationdetail";



export class InventoryScriptInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: any;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ScriptDescriptionData;

  @SpeakeasyMetadata({ data: "json, name=eventPattern" })
  eventPattern?: any;

  @SpeakeasyMetadata({ data: "json, name=scriptId" })
  scriptId?: string;

  @SpeakeasyMetadata({ data: "json, name=scriptLocalizationDetails", elemType: ScriptLocalizationDetail })
  scriptLocalizationDetails?: ScriptLocalizationDetail[];

  @SpeakeasyMetadata({ data: "json, name=scriptName" })
  scriptName?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: string;
}
