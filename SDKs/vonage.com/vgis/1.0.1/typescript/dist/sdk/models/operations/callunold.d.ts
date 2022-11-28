import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CallUnoldPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CallUnoldRequest extends SpeakeasyBase {
    pathParams: CallUnoldPathParams;
}
export declare class CallUnoldResponse extends SpeakeasyBase {
    call?: shared.Call;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
