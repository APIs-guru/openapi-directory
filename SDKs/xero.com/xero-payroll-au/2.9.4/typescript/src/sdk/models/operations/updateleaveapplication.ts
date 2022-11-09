import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLeaveApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=LeaveApplicationID" })
  leaveApplicationId: string;
}


export class UpdateLeaveApplicationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class UpdateLeaveApplicationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateLeaveApplicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLeaveApplicationPathParams;

  @Metadata()
  headers: UpdateLeaveApplicationHeaders;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.LeaveApplication })
  request: shared.LeaveApplication[];

  @Metadata()
  security: UpdateLeaveApplicationSecurity;
}


export class UpdateLeaveApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  leaveApplications?: shared.LeaveApplications;

  @Metadata()
  statusCode: number;
}
