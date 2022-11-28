import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayrollCalendarsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=where" })
  where?: string;
}


export class GetPayrollCalendarsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetPayrollCalendarsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetPayrollCalendarsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPayrollCalendarsQueryParams;

  @SpeakeasyMetadata()
  headers: GetPayrollCalendarsHeaders;

  @SpeakeasyMetadata()
  security: GetPayrollCalendarsSecurity;
}


export class GetPayrollCalendarsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiException?: shared.ApiException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payrollCalendars?: shared.PayrollCalendars;

  @SpeakeasyMetadata()
  statusCode: number;
}
