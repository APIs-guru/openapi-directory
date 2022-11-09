import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutPayRunTagPathParams extends SpeakeasyBase {
    employerId: string;
    payRunId: string;
    payScheduleId: string;
    tagId: string;
}
export declare class PutPayRunTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutPayRunTagRequest extends SpeakeasyBase {
    pathParams: PutPayRunTagPathParams;
    headers: PutPayRunTagHeaders;
}
export declare class PutPayRunTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
