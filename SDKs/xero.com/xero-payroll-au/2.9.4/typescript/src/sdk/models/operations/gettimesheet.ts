import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTimesheetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TimesheetID" })
  timesheetId: string;
}


export class GetTimesheetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetTimesheetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetTimesheetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTimesheetPathParams;

  @SpeakeasyMetadata()
  headers: GetTimesheetHeaders;

  @SpeakeasyMetadata()
  security: GetTimesheetSecurity;
}


export class GetTimesheetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  timesheetObject?: shared.TimesheetObject;
}
