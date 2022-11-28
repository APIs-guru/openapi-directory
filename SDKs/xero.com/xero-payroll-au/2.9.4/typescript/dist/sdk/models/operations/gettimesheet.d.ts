import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTimesheetPathParams extends SpeakeasyBase {
    timesheetId: string;
}
export declare class GetTimesheetHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetTimesheetSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetTimesheetRequest extends SpeakeasyBase {
    pathParams: GetTimesheetPathParams;
    headers: GetTimesheetHeaders;
    security: GetTimesheetSecurity;
}
export declare class GetTimesheetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    timesheetObject?: shared.TimesheetObject;
}
