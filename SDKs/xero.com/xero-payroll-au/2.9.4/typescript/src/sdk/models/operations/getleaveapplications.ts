import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLeaveApplicationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=where" })
  where?: string;
}


export class GetLeaveApplicationsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetLeaveApplicationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetLeaveApplicationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLeaveApplicationsQueryParams;

  @Metadata()
  headers: GetLeaveApplicationsHeaders;

  @Metadata()
  security: GetLeaveApplicationsSecurity;
}


export class GetLeaveApplicationsResponse extends SpeakeasyBase {
  @Metadata()
  apiException?: shared.ApiException;

  @Metadata()
  contentType: string;

  @Metadata()
  leaveApplications?: shared.LeaveApplications;

  @Metadata()
  statusCode: number;
}
