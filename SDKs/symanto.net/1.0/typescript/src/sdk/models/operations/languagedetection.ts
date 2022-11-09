import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LanguageDetectionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json", elemType: shared.LanguageDetection })
  request?: shared.LanguageDetection[];
}


export class LanguageDetectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.LanguagePredicted })
  languageDetectionResponse?: shared.LanguagePredicted[];

  @Metadata()
  statusCode: number;

  @Metadata()
  validationErrors?: shared.ValidationErrors;
}
