import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayrollCalendarPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayrollCalendarID" })
  payrollCalendarId: string;
}


export class GetPayrollCalendarHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetPayrollCalendarSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetPayrollCalendarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayrollCalendarPathParams;

  @SpeakeasyMetadata()
  headers: GetPayrollCalendarHeaders;

  @SpeakeasyMetadata()
  security: GetPayrollCalendarSecurity;
}


export class GetPayrollCalendarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiException?: shared.ApiException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payrollCalendars?: shared.PayrollCalendars;

  @SpeakeasyMetadata()
  statusCode: number;
}
