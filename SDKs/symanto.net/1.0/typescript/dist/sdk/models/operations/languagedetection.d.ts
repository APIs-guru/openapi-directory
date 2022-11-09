import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LanguageDetectionRequest extends SpeakeasyBase {
    request?: shared.LanguageDetection[];
}
export declare class LanguageDetectionResponse extends SpeakeasyBase {
    contentType: string;
    languageDetectionResponse?: shared.LanguagePredicted[];
    statusCode: number;
    validationErrors?: shared.ValidationErrors;
}
