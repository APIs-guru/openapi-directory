import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCompanyAttendancesRequest extends SpeakeasyBase {
    request: shared.NewAttendancePeriodRequest;
}
export declare class PostCompanyAttendancesResponse extends SpeakeasyBase {
    contentType: string;
    detailedErrorResponse?: shared.DetailedErrorResponse;
    newAttendancePeriodResponse?: shared.NewAttendancePeriodResponse;
    statusCode: number;
}
