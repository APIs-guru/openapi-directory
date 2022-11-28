import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaySchedulesWithTagPathParams extends SpeakeasyBase {
    employerId: string;
    tagId: string;
}
export declare class GetPaySchedulesWithTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPaySchedulesWithTagRequest extends SpeakeasyBase {
    pathParams: GetPaySchedulesWithTagPathParams;
    headers: GetPaySchedulesWithTagHeaders;
}
export declare class GetPaySchedulesWithTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
