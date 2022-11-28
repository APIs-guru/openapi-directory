import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePaySchedulePathParams extends SpeakeasyBase {
    employerId: string;
    payScheduleId: string;
}
export declare class DeletePayScheduleHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeletePayScheduleRequest extends SpeakeasyBase {
    pathParams: DeletePaySchedulePathParams;
    headers: DeletePayScheduleHeaders;
}
export declare class DeletePayScheduleResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
