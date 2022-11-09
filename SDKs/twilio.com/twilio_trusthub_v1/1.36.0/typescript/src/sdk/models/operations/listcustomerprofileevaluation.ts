import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCUSTOMERPROFILEEVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
];



export class ListCustomerProfileEvaluationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" })
  customerProfileSid: string;
}


export class ListCustomerProfileEvaluationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListCustomerProfileEvaluationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCustomerProfileEvaluationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListCustomerProfileEvaluationPathParams;

  @Metadata()
  queryParams: ListCustomerProfileEvaluationQueryParams;

  @Metadata()
  security: ListCustomerProfileEvaluationSecurity;
}


export class ListCustomerProfileEvaluationListCustomerProfileEvaluationResponseMeta extends SpeakeasyBase {
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


export class ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListCustomerProfileEvaluationListCustomerProfileEvaluationResponseMeta;

  @Metadata({ data: "json, name=results", elemType: shared.TrusthubV1CustomerProfileCustomerProfileEvaluation })
  results?: shared.TrusthubV1CustomerProfileCustomerProfileEvaluation[];
}


export class ListCustomerProfileEvaluationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCustomerProfileEvaluationResponse?: ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse;

  @Metadata()
  statusCode: number;
}
