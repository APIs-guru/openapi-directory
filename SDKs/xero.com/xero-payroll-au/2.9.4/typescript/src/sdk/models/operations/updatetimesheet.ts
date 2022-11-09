import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTimesheetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TimesheetID" })
  timesheetId: string;
}


export class UpdateTimesheetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class UpdateTimesheetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateTimesheetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateTimesheetPathParams;

  @Metadata()
  headers: UpdateTimesheetHeaders;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Timesheet })
  request?: shared.Timesheet[];

  @Metadata()
  security: UpdateTimesheetSecurity;
}


export class UpdateTimesheetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  timesheets?: shared.Timesheets;
}
