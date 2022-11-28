import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchPensionPathParams extends SpeakeasyBase {
    employerId: string;
    pensionId: string;
}
export declare class PatchPensionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PatchPensionRequest extends SpeakeasyBase {
    pathParams: PatchPensionPathParams;
    headers: PatchPensionHeaders;
    request: shared.Pension;
}
export declare class PatchPensionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    pension?: shared.Pension;
    statusCode: number;
}
