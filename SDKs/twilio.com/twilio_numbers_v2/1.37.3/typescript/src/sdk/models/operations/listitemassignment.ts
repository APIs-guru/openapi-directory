import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListItemAssignmentServerList = [
	"https://numbers.twilio.com",
] as const;


export class ListItemAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" })
  bundleSid: string;
}


export class ListItemAssignmentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListItemAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListItemAssignmentListItemAssignmentResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListItemAssignmentListItemAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListItemAssignmentListItemAssignmentResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.NumbersV2RegulatoryComplianceBundleItemAssignment })
  results?: shared.NumbersV2RegulatoryComplianceBundleItemAssignment[];
}


export class ListItemAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListItemAssignmentPathParams;

  @SpeakeasyMetadata()
  queryParams: ListItemAssignmentQueryParams;

  @SpeakeasyMetadata()
  security: ListItemAssignmentSecurity;
}


export class ListItemAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listItemAssignmentResponse?: ListItemAssignmentListItemAssignmentResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
