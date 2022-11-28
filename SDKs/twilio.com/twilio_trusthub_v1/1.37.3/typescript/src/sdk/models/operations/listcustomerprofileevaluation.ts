import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListCustomerProfileEvaluationServerList = [
	"https://trusthub.twilio.com",
] as const;


export class ListCustomerProfileEvaluationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" })
  customerProfileSid: string;
}


export class ListCustomerProfileEvaluationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListCustomerProfileEvaluationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCustomerProfileEvaluationListCustomerProfileEvaluationResponseMeta extends SpeakeasyBase {
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


export class ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListCustomerProfileEvaluationListCustomerProfileEvaluationResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.TrusthubV1CustomerProfileCustomerProfileEvaluation })
  results?: shared.TrusthubV1CustomerProfileCustomerProfileEvaluation[];
}


export class ListCustomerProfileEvaluationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListCustomerProfileEvaluationPathParams;

  @SpeakeasyMetadata()
  queryParams: ListCustomerProfileEvaluationQueryParams;

  @SpeakeasyMetadata()
  security: ListCustomerProfileEvaluationSecurity;
}


export class ListCustomerProfileEvaluationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listCustomerProfileEvaluationResponse?: ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
