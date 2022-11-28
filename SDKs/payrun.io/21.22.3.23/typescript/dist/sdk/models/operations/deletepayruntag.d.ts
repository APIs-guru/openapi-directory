import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePayRunTagPathParams extends SpeakeasyBase {
    employerId: string;
    payRunId: string;
    payScheduleId: string;
    tagId: string;
}
export declare class DeletePayRunTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeletePayRunTagRequest extends SpeakeasyBase {
    pathParams: DeletePayRunTagPathParams;
    headers: DeletePayRunTagHeaders;
}
export declare class DeletePayRunTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
