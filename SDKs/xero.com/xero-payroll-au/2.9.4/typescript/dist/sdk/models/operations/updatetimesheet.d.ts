import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTimesheetPathParams extends SpeakeasyBase {
    timesheetId: string;
}
export declare class UpdateTimesheetHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class UpdateTimesheetSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UpdateTimesheetRequest extends SpeakeasyBase {
    pathParams: UpdateTimesheetPathParams;
    headers: UpdateTimesheetHeaders;
    request?: shared.TimesheetInput[];
    security: UpdateTimesheetSecurity;
}
export declare class UpdateTimesheetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    timesheets?: shared.Timesheets;
}
