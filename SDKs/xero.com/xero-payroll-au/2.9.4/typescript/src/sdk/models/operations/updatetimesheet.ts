import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTimesheetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TimesheetID" })
  timesheetId: string;
}


export class UpdateTimesheetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class UpdateTimesheetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateTimesheetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTimesheetPathParams;

  @SpeakeasyMetadata()
  headers: UpdateTimesheetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.TimesheetInput })
  request?: shared.TimesheetInput[];

  @SpeakeasyMetadata()
  security: UpdateTimesheetSecurity;
}


export class UpdateTimesheetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  timesheets?: shared.Timesheets;
}
