import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCisTransactionsFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetCisTransactionsFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCisTransactionsFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetCisTransactionsFromEmployerPathParams;
    headers: GetCisTransactionsFromEmployerHeaders;
}
export declare class GetCisTransactionsFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
