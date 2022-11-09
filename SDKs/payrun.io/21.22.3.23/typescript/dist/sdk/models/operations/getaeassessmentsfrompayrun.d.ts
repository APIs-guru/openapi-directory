import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAeAssessmentsFromPayRunPathParams extends SpeakeasyBase {
    employerId: string;
    payRunId: string;
    payScheduleId: string;
}
export declare class GetAeAssessmentsFromPayRunHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAeAssessmentsFromPayRunRequest extends SpeakeasyBase {
    pathParams: GetAeAssessmentsFromPayRunPathParams;
    headers: GetAeAssessmentsFromPayRunHeaders;
}
export declare class GetAeAssessmentsFromPayRunResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
