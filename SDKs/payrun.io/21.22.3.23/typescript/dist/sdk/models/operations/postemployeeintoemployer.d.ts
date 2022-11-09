import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostEmployeeIntoEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class PostEmployeeIntoEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostEmployeeIntoEmployerRequest extends SpeakeasyBase {
    pathParams: PostEmployeeIntoEmployerPathParams;
    headers: PostEmployeeIntoEmployerHeaders;
    request: shared.Employee;
}
export declare class PostEmployeeIntoEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
