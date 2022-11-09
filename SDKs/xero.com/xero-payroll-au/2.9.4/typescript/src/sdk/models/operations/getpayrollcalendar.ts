import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayrollCalendarPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=PayrollCalendarID" })
  payrollCalendarId: string;
}


export class GetPayrollCalendarHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetPayrollCalendarSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetPayrollCalendarRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPayrollCalendarPathParams;

  @Metadata()
  headers: GetPayrollCalendarHeaders;

  @Metadata()
  security: GetPayrollCalendarSecurity;
}


export class GetPayrollCalendarResponse extends SpeakeasyBase {
  @Metadata()
  apiException?: shared.ApiException;

  @Metadata()
  contentType: string;

  @Metadata()
  payrollCalendars?: shared.PayrollCalendars;

  @Metadata()
  statusCode: number;
}
