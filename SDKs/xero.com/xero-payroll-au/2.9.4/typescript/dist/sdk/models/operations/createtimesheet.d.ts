import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTimesheetHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class CreateTimesheetSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateTimesheetRequest extends SpeakeasyBase {
    headers: CreateTimesheetHeaders;
    request: shared.TimesheetInput[];
    security: CreateTimesheetSecurity;
}
export declare class CreateTimesheetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    timesheets?: shared.Timesheets;
}
