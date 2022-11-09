import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScriptDescriptionData } from "./scriptdescriptiondata";


export class ScriptLocalizationDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=configMetadata" })
  configMetadata?: any;

  @Metadata({ data: "json, name=data" })
  data?: ScriptDescriptionData;

  @Metadata({ data: "json, name=language" })
  language?: string;
}
