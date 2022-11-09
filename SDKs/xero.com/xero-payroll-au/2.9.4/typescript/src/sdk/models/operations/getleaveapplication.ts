import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLeaveApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=LeaveApplicationID" })
  leaveApplicationId: string;
}


export class GetLeaveApplicationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetLeaveApplicationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetLeaveApplicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLeaveApplicationPathParams;

  @Metadata()
  headers: GetLeaveApplicationHeaders;

  @Metadata()
  security: GetLeaveApplicationSecurity;
}


export class GetLeaveApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  leaveApplications?: shared.LeaveApplications;

  @Metadata()
  statusCode: number;
}
