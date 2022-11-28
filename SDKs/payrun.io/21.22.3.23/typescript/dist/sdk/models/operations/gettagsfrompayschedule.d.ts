import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsFromPaySchedulePathParams extends SpeakeasyBase {
    employerId: string;
    payScheduleId: string;
}
export declare class GetTagsFromPayScheduleHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromPayScheduleRequest extends SpeakeasyBase {
    pathParams: GetTagsFromPaySchedulePathParams;
    headers: GetTagsFromPayScheduleHeaders;
}
export declare class GetTagsFromPayScheduleResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
