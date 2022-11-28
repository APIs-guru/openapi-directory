import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCompanyAttendancesQueryParams extends SpeakeasyBase {
    employees?: number[];
    endDate: Date;
    limit?: number;
    offset?: number;
    startDate: Date;
    updatedFrom?: string;
    updatedTo?: string;
}
export declare class GetCompanyAttendancesRequest extends SpeakeasyBase {
    queryParams: GetCompanyAttendancesQueryParams;
}
export declare class GetCompanyAttendancesResponse extends SpeakeasyBase {
    attendancePeriodsResponse?: shared.AttendancePeriodsResponse;
    contentType: string;
    statusCode: number;
}
