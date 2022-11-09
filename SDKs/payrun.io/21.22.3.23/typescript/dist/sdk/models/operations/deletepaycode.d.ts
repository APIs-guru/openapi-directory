import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeletePayCodePathParams extends SpeakeasyBase {
    employerId: string;
    payCodeId: string;
}
export declare class DeletePayCodeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeletePayCodeRequest extends SpeakeasyBase {
    pathParams: DeletePayCodePathParams;
    headers: DeletePayCodeHeaders;
}
export declare class DeletePayCodeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
