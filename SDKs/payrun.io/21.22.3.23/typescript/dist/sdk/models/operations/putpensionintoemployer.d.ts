import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutPensionIntoEmployerPathParams extends SpeakeasyBase {
    employerId: string;
    pensionId: string;
}
export declare class PutPensionIntoEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutPensionIntoEmployerRequest extends SpeakeasyBase {
    pathParams: PutPensionIntoEmployerPathParams;
    headers: PutPensionIntoEmployerHeaders;
    request: shared.Pension;
}
export declare class PutPensionIntoEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    pension?: shared.Pension;
    statusCode: number;
}
