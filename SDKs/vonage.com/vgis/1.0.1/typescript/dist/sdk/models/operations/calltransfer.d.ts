import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CallTransferPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CallTransferRequest extends SpeakeasyBase {
    pathParams: CallTransferPathParams;
    request: shared.CallTransfer;
}
export declare class CallTransferResponse extends SpeakeasyBase {
    call?: shared.Call;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
