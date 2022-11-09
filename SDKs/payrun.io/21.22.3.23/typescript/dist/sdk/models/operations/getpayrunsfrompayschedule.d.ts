import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPayRunsFromPaySchedulePathParams extends SpeakeasyBase {
    employerId: string;
    payScheduleId: string;
}
export declare class GetPayRunsFromPayScheduleHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayRunsFromPayScheduleRequest extends SpeakeasyBase {
    pathParams: GetPayRunsFromPaySchedulePathParams;
    headers: GetPayRunsFromPayScheduleHeaders;
}
export declare class GetPayRunsFromPayScheduleResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
