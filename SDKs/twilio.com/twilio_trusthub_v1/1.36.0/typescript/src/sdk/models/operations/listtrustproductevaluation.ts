import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTTRUSTPRODUCTEVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
];



export class ListTrustProductEvaluationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" })
  trustProductSid: string;
}


export class ListTrustProductEvaluationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListTrustProductEvaluationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTrustProductEvaluationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListTrustProductEvaluationPathParams;

  @Metadata()
  queryParams: ListTrustProductEvaluationQueryParams;

  @Metadata()
  security: ListTrustProductEvaluationSecurity;
}


export class ListTrustProductEvaluationListTrustProductEvaluationResponseMeta extends SpeakeasyBase {
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


export class ListTrustProductEvaluationListTrustProductEvaluationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListTrustProductEvaluationListTrustProductEvaluationResponseMeta;

  @Metadata({ data: "json, name=results", elemType: shared.TrusthubV1TrustProductTrustProductEvaluation })
  results?: shared.TrusthubV1TrustProductTrustProductEvaluation[];
}


export class ListTrustProductEvaluationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTrustProductEvaluationResponse?: ListTrustProductEvaluationListTrustProductEvaluationResponse;

  @Metadata()
  statusCode: number;
}
