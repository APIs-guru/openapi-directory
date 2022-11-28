import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLeaveApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LeaveApplicationID" })
  leaveApplicationId: string;
}


export class GetLeaveApplicationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetLeaveApplicationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetLeaveApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLeaveApplicationPathParams;

  @SpeakeasyMetadata()
  headers: GetLeaveApplicationHeaders;

  @SpeakeasyMetadata()
  security: GetLeaveApplicationSecurity;
}


export class GetLeaveApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  leaveApplications?: shared.LeaveApplications;

  @SpeakeasyMetadata()
  statusCode: number;
}
