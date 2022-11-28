import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LanguageDetectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.LanguageDetection })
  request?: shared.LanguageDetection[];
}


export class LanguageDetectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.LanguagePredicted })
  languageDetectionResponse?: shared.LanguagePredicted[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationErrors?: shared.ValidationErrors;
}
