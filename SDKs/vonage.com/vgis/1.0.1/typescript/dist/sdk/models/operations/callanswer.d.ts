import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CallAnswerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CallAnswerRequest extends SpeakeasyBase {
    pathParams: CallAnswerPathParams;
}
export declare class CallAnswerResponse extends SpeakeasyBase {
    call?: shared.Call;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
