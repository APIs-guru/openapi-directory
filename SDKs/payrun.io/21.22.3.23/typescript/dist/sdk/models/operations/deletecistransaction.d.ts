import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCisTransactionPathParams extends SpeakeasyBase {
    cisTransactionId: string;
    employerId: string;
}
export declare class DeleteCisTransactionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteCisTransactionRequest extends SpeakeasyBase {
    pathParams: DeleteCisTransactionPathParams;
    headers: DeleteCisTransactionHeaders;
}
export declare class DeleteCisTransactionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
