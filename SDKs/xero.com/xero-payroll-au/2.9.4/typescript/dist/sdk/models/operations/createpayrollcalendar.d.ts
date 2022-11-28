import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePayrollCalendarHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class CreatePayrollCalendarSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreatePayrollCalendarRequest extends SpeakeasyBase {
    headers: CreatePayrollCalendarHeaders;
    request: shared.PayrollCalendarInput[];
    security: CreatePayrollCalendarSecurity;
}
export declare class CreatePayrollCalendarResponse extends SpeakeasyBase {
    contentType: string;
    payrollCalendars?: shared.PayrollCalendars;
    statusCode: number;
}
