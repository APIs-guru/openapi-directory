import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSpecificSentencePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSpecificSentenceRequest extends SpeakeasyBase {
    pathParams: GetSpecificSentencePathParams;
}
export declare class GetSpecificSentence200ApplicationJson extends SpeakeasyBase {
    data?: shared.Sentence;
}
export declare class GetSpecificSentenceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSpecificSentence200ApplicationJsonObject?: GetSpecificSentence200ApplicationJson;
}
