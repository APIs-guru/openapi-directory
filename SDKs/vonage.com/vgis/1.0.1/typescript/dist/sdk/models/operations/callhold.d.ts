import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CallHoldPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CallHoldRequest extends SpeakeasyBase {
    pathParams: CallHoldPathParams;
}
export declare class CallHoldResponse extends SpeakeasyBase {
    call?: shared.Call;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
