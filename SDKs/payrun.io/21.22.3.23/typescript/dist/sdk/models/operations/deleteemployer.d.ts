import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class DeleteEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteEmployerRequest extends SpeakeasyBase {
    pathParams: DeleteEmployerPathParams;
    headers: DeleteEmployerHeaders;
}
export declare class DeleteEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
