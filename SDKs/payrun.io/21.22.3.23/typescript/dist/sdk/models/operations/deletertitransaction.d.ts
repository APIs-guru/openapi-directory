import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRtiTransactionPathParams extends SpeakeasyBase {
    employerId: string;
    rtiTransactionId: string;
}
export declare class DeleteRtiTransactionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteRtiTransactionRequest extends SpeakeasyBase {
    pathParams: DeleteRtiTransactionPathParams;
    headers: DeleteRtiTransactionHeaders;
}
export declare class DeleteRtiTransactionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
