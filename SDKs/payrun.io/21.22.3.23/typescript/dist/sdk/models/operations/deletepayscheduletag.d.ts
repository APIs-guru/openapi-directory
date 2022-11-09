import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeletePayScheduleTagPathParams extends SpeakeasyBase {
    employerId: string;
    payScheduleId: string;
    tagId: string;
}
export declare class DeletePayScheduleTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeletePayScheduleTagRequest extends SpeakeasyBase {
    pathParams: DeletePayScheduleTagPathParams;
    headers: DeletePayScheduleTagHeaders;
}
export declare class DeletePayScheduleTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
