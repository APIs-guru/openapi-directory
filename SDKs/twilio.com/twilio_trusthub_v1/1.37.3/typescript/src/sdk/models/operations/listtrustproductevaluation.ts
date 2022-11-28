import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListTrustProductEvaluationServerList = [
	"https://trusthub.twilio.com",
] as const;


export class ListTrustProductEvaluationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" })
  trustProductSid: string;
}


export class ListTrustProductEvaluationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListTrustProductEvaluationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTrustProductEvaluationListTrustProductEvaluationResponseMeta extends SpeakeasyBase {
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


export class ListTrustProductEvaluationListTrustProductEvaluationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListTrustProductEvaluationListTrustProductEvaluationResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.TrusthubV1TrustProductTrustProductEvaluation })
  results?: shared.TrusthubV1TrustProductTrustProductEvaluation[];
}


export class ListTrustProductEvaluationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListTrustProductEvaluationPathParams;

  @SpeakeasyMetadata()
  queryParams: ListTrustProductEvaluationQueryParams;

  @SpeakeasyMetadata()
  security: ListTrustProductEvaluationSecurity;
}


export class ListTrustProductEvaluationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listTrustProductEvaluationResponse?: ListTrustProductEvaluationListTrustProductEvaluationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
