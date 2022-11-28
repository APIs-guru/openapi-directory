import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllPayScheduleTagsPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetAllPayScheduleTagsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllPayScheduleTagsRequest extends SpeakeasyBase {
    pathParams: GetAllPayScheduleTagsPathParams;
    headers: GetAllPayScheduleTagsHeaders;
}
export declare class GetAllPayScheduleTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
