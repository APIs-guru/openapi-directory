import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPayCodeFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
    payCodeId: string;
}
export declare class GetPayCodeFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayCodeFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetPayCodeFromEmployerPathParams;
    headers: GetPayCodeFromEmployerHeaders;
}
export declare class GetPayCodeFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    payCode?: shared.PayCode;
    statusCode: number;
}
