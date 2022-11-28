import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayrollCalendarPathParams extends SpeakeasyBase {
    payrollCalendarId: string;
}
export declare class GetPayrollCalendarHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetPayrollCalendarSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetPayrollCalendarRequest extends SpeakeasyBase {
    pathParams: GetPayrollCalendarPathParams;
    headers: GetPayrollCalendarHeaders;
    security: GetPayrollCalendarSecurity;
}
export declare class GetPayrollCalendarResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    payrollCalendars?: shared.PayrollCalendars;
    statusCode: number;
}
