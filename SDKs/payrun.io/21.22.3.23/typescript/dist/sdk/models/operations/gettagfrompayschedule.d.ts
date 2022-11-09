import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTagFromPaySchedulePathParams extends SpeakeasyBase {
    employerId: string;
    payScheduleId: string;
    tagId: string;
}
export declare class GetTagFromPayScheduleHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromPayScheduleRequest extends SpeakeasyBase {
    pathParams: GetTagFromPaySchedulePathParams;
    headers: GetTagFromPayScheduleHeaders;
}
export declare class GetTagFromPayScheduleResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
