import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScriptDescriptionData } from "./scriptdescriptiondata";



export class ScriptLocalizationDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configMetadata" })
  configMetadata?: any;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ScriptDescriptionData;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;
}
