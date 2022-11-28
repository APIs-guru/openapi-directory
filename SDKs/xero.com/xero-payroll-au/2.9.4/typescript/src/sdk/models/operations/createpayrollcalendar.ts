import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePayrollCalendarHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreatePayrollCalendarSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreatePayrollCalendarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreatePayrollCalendarHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.PayrollCalendarInput })
  request: shared.PayrollCalendarInput[];

  @SpeakeasyMetadata()
  security: CreatePayrollCalendarSecurity;
}


export class CreatePayrollCalendarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payrollCalendars?: shared.PayrollCalendars;

  @SpeakeasyMetadata()
  statusCode: number;
}
