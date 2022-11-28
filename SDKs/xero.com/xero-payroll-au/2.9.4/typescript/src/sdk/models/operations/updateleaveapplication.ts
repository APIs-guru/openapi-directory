import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateLeaveApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LeaveApplicationID" })
  leaveApplicationId: string;
}


export class UpdateLeaveApplicationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class UpdateLeaveApplicationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateLeaveApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateLeaveApplicationPathParams;

  @SpeakeasyMetadata()
  headers: UpdateLeaveApplicationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.LeaveApplicationInput })
  request: shared.LeaveApplicationInput[];

  @SpeakeasyMetadata()
  security: UpdateLeaveApplicationSecurity;
}


export class UpdateLeaveApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  leaveApplications?: shared.LeaveApplications;

  @SpeakeasyMetadata()
  statusCode: number;
}
