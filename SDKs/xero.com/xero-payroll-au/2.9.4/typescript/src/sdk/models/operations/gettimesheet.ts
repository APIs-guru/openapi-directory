import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTimesheetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TimesheetID" })
  timesheetId: string;
}


export class GetTimesheetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetTimesheetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetTimesheetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTimesheetPathParams;

  @Metadata()
  headers: GetTimesheetHeaders;

  @Metadata()
  security: GetTimesheetSecurity;
}


export class GetTimesheetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  timesheetObject?: shared.TimesheetObject;
}
