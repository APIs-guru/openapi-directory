import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListTrustProductEntityAssignmentServerList = [
	"https://trusthub.twilio.com",
] as const;


export class ListTrustProductEntityAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" })
  trustProductSid: string;
}


export class ListTrustProductEntityAssignmentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListTrustProductEntityAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta extends SpeakeasyBase {
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


export class ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.TrusthubV1TrustProductTrustProductEntityAssignment })
  results?: shared.TrusthubV1TrustProductTrustProductEntityAssignment[];
}


export class ListTrustProductEntityAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListTrustProductEntityAssignmentPathParams;

  @SpeakeasyMetadata()
  queryParams: ListTrustProductEntityAssignmentQueryParams;

  @SpeakeasyMetadata()
  security: ListTrustProductEntityAssignmentSecurity;
}


export class ListTrustProductEntityAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listTrustProductEntityAssignmentResponse?: ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
