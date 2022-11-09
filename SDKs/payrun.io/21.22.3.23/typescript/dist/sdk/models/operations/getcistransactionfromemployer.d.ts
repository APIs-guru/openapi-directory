import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCisTransactionFromEmployerPathParams extends SpeakeasyBase {
    cisTransactionId: string;
    employerId: string;
}
export declare class GetCisTransactionFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCisTransactionFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetCisTransactionFromEmployerPathParams;
    headers: GetCisTransactionFromEmployerHeaders;
}
export declare class GetCisTransactionFromEmployerResponse extends SpeakeasyBase {
    cisTransaction?: shared.CisTransaction;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
