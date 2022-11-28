import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateLeaveApplicationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreateLeaveApplicationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateLeaveApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateLeaveApplicationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.LeaveApplicationInput })
  request: shared.LeaveApplicationInput[];

  @SpeakeasyMetadata()
  security: CreateLeaveApplicationSecurity;
}


export class CreateLeaveApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  leaveApplications?: shared.LeaveApplications;

  @SpeakeasyMetadata()
  statusCode: number;
}
