import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllPayLineTagsPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
}
export declare class GetAllPayLineTagsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllPayLineTagsRequest extends SpeakeasyBase {
    pathParams: GetAllPayLineTagsPathParams;
    headers: GetAllPayLineTagsHeaders;
}
export declare class GetAllPayLineTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
