import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCisLineTypeIntoEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class PostCisLineTypeIntoEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostCisLineTypeIntoEmployerRequest extends SpeakeasyBase {
    pathParams: PostCisLineTypeIntoEmployerPathParams;
    headers: PostCisLineTypeIntoEmployerHeaders;
    request: shared.CisLineType;
}
export declare class PostCisLineTypeIntoEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
