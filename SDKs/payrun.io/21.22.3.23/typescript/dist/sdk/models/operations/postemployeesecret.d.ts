import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostEmployeeSecretPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
}
export declare class PostEmployeeSecretHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostEmployeeSecretRequest extends SpeakeasyBase {
    pathParams: PostEmployeeSecretPathParams;
    headers: PostEmployeeSecretHeaders;
}
export declare class PostEmployeeSecretResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
