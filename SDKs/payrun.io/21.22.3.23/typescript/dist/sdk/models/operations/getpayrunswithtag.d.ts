import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayRunsWithTagPathParams extends SpeakeasyBase {
    employerId: string;
    payScheduleId: string;
    tagId: string;
}
export declare class GetPayRunsWithTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayRunsWithTagRequest extends SpeakeasyBase {
    pathParams: GetPayRunsWithTagPathParams;
    headers: GetPayRunsWithTagHeaders;
}
export declare class GetPayRunsWithTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
