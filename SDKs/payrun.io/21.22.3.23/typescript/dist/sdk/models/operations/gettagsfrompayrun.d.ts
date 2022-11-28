import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsFromPayRunPathParams extends SpeakeasyBase {
    employerId: string;
    payRunId: string;
    payScheduleId: string;
}
export declare class GetTagsFromPayRunHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromPayRunRequest extends SpeakeasyBase {
    pathParams: GetTagsFromPayRunPathParams;
    headers: GetTagsFromPayRunHeaders;
}
export declare class GetTagsFromPayRunResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
