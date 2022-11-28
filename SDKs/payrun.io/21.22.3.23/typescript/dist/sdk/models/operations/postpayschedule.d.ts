import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPaySchedulePathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class PostPayScheduleHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostPayScheduleRequest extends SpeakeasyBase {
    pathParams: PostPaySchedulePathParams;
    headers: PostPayScheduleHeaders;
    request: shared.PaySchedule;
}
export declare class PostPayScheduleResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
