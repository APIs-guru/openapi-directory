import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPensionFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
    pensionId: string;
}
export declare class GetPensionFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPensionFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetPensionFromEmployerPathParams;
    headers: GetPensionFromEmployerHeaders;
}
export declare class GetPensionFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    pension?: shared.Pension;
    statusCode: number;
}
