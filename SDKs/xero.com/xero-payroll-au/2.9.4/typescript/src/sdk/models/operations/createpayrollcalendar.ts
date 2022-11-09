import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePayrollCalendarHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreatePayrollCalendarSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreatePayrollCalendarRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePayrollCalendarHeaders;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.PayrollCalendar })
  request: shared.PayrollCalendar[];

  @Metadata()
  security: CreatePayrollCalendarSecurity;
}


export class CreatePayrollCalendarResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payrollCalendars?: shared.PayrollCalendars;

  @Metadata()
  statusCode: number;
}
