import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutPayCodePathParams extends SpeakeasyBase {
    employerId: string;
    payCodeId: string;
}
export declare class PutPayCodeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutPayCodeRequest extends SpeakeasyBase {
    pathParams: PutPayCodePathParams;
    headers: PutPayCodeHeaders;
    request: shared.PayCode;
}
export declare class PutPayCodeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    payCode?: shared.PayCode;
    statusCode: number;
}
