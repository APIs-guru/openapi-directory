import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllPayRunTagsPathParams extends SpeakeasyBase {
    employerId: string;
    payScheduleId: string;
}
export declare class GetAllPayRunTagsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllPayRunTagsRequest extends SpeakeasyBase {
    pathParams: GetAllPayRunTagsPathParams;
    headers: GetAllPayRunTagsHeaders;
}
export declare class GetAllPayRunTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
