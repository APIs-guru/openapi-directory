import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayrollCalendarsQueryParams extends SpeakeasyBase {
    order?: string;
    page?: number;
    where?: string;
}
export declare class GetPayrollCalendarsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    xeroTenantId: string;
}
export declare class GetPayrollCalendarsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetPayrollCalendarsRequest extends SpeakeasyBase {
    queryParams: GetPayrollCalendarsQueryParams;
    headers: GetPayrollCalendarsHeaders;
    security: GetPayrollCalendarsSecurity;
}
export declare class GetPayrollCalendarsResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    payrollCalendars?: shared.PayrollCalendars;
    statusCode: number;
}
