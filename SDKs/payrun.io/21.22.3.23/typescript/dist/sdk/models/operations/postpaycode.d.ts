import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostPayCodePathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class PostPayCodeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostPayCodeRequest extends SpeakeasyBase {
    pathParams: PostPayCodePathParams;
    headers: PostPayCodeHeaders;
    request: shared.PayCode;
}
export declare class PostPayCodeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
