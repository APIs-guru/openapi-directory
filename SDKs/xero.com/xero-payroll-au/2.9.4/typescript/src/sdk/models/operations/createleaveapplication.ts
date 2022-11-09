import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateLeaveApplicationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreateLeaveApplicationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateLeaveApplicationRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateLeaveApplicationHeaders;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.LeaveApplication })
  request: shared.LeaveApplication[];

  @Metadata()
  security: CreateLeaveApplicationSecurity;
}


export class CreateLeaveApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  leaveApplications?: shared.LeaveApplications;

  @Metadata()
  statusCode: number;
}
