import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchCompanyAttendancesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PatchCompanyAttendancesIdRequest extends SpeakeasyBase {
    pathParams: PatchCompanyAttendancesIdPathParams;
    request: shared.UpdateAttendancePeriodRequest;
}
export declare class PatchCompanyAttendancesIdResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    response?: shared.Response;
    statusCode: number;
}
