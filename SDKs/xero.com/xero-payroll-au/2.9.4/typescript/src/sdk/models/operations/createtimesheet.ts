import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTimesheetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreateTimesheetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateTimesheetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateTimesheetHeaders;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Timesheet })
  request: shared.Timesheet[];

  @Metadata()
  security: CreateTimesheetSecurity;
}


export class CreateTimesheetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  timesheets?: shared.Timesheets;
}
