import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRtiTransactionsFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetRtiTransactionsFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetRtiTransactionsFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetRtiTransactionsFromEmployerPathParams;
    headers: GetRtiTransactionsFromEmployerHeaders;
}
export declare class GetRtiTransactionsFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
