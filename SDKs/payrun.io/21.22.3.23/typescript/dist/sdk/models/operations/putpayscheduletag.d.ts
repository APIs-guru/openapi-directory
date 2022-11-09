import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutPayScheduleTagPathParams extends SpeakeasyBase {
    employerId: string;
    payScheduleId: string;
    tagId: string;
}
export declare class PutPayScheduleTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutPayScheduleTagRequest extends SpeakeasyBase {
    pathParams: PutPayScheduleTagPathParams;
    headers: PutPayScheduleTagHeaders;
}
export declare class PutPayScheduleTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
