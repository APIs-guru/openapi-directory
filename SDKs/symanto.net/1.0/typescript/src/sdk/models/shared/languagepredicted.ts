import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LanguagePredicted extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detected_language" })
  detectedLanguage: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
