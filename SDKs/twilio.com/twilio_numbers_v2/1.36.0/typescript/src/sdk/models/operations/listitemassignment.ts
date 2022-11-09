import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTITEMASSIGNMENT_SERVERS = [
	"https://numbers.twilio.com",
];



export class ListItemAssignmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" })
  bundleSid: string;
}


export class ListItemAssignmentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListItemAssignmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListItemAssignmentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListItemAssignmentPathParams;

  @Metadata()
  queryParams: ListItemAssignmentQueryParams;

  @Metadata()
  security: ListItemAssignmentSecurity;
}


export class ListItemAssignmentListItemAssignmentResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListItemAssignmentListItemAssignmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListItemAssignmentListItemAssignmentResponseMeta;

  @Metadata({ data: "json, name=results", elemType: shared.NumbersV2RegulatoryComplianceBundleItemAssignment })
  results?: shared.NumbersV2RegulatoryComplianceBundleItemAssignment[];
}


export class ListItemAssignmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listItemAssignmentResponse?: ListItemAssignmentListItemAssignmentResponse;

  @Metadata()
  statusCode: number;
}
