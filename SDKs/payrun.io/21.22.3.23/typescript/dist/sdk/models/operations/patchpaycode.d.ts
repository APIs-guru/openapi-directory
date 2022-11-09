import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PatchPayCodePathParams extends SpeakeasyBase {
    employerId: string;
    payCodeId: string;
}
export declare class PatchPayCodeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PatchPayCodeRequest extends SpeakeasyBase {
    pathParams: PatchPayCodePathParams;
    headers: PatchPayCodeHeaders;
    request: shared.PayCode;
}
export declare class PatchPayCodeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    payCode?: shared.PayCode;
    statusCode: number;
}
