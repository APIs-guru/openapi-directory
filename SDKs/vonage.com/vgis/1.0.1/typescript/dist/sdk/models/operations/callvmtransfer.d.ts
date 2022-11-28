import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CallVmTransferPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CallVmTransferRequest extends SpeakeasyBase {
    pathParams: CallVmTransferPathParams;
}
export declare class CallVmTransferResponse extends SpeakeasyBase {
    call?: shared.Call;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
