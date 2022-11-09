import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LanguagePredicted extends SpeakeasyBase {
  @Metadata({ data: "json, name=detected_language" })
  detectedLanguage: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
