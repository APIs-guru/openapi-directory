import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateTimesheetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreateTimesheetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateTimesheetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateTimesheetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.TimesheetInput })
  request: shared.TimesheetInput[];

  @SpeakeasyMetadata()
  security: CreateTimesheetSecurity;
}


export class CreateTimesheetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  timesheets?: shared.Timesheets;
}
