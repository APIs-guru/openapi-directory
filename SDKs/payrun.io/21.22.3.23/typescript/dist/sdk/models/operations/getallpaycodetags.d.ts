import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAllPayCodeTagsPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetAllPayCodeTagsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllPayCodeTagsRequest extends SpeakeasyBase {
    pathParams: GetAllPayCodeTagsPathParams;
    headers: GetAllPayCodeTagsHeaders;
}
export declare class GetAllPayCodeTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
