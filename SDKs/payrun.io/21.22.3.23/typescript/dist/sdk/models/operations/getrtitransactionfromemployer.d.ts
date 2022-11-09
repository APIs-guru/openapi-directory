import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRtiTransactionFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
    rtiTransactionId: string;
}
export declare class GetRtiTransactionFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetRtiTransactionFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetRtiTransactionFromEmployerPathParams;
    headers: GetRtiTransactionFromEmployerHeaders;
}
export declare class GetRtiTransactionFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    rtiTransactionBase?: shared.RtiTransactionBase;
    statusCode: number;
}
