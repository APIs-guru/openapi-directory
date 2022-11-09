import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTEVALUATION_SERVERS = [
	"https://numbers.twilio.com",
];



export class ListEvaluationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" })
  bundleSid: string;
}


export class ListEvaluationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListEvaluationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListEvaluationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListEvaluationPathParams;

  @Metadata()
  queryParams: ListEvaluationQueryParams;

  @Metadata()
  security: ListEvaluationSecurity;
}


export class ListEvaluationListEvaluationResponseMeta extends SpeakeasyBase {
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


export class ListEvaluationListEvaluationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListEvaluationListEvaluationResponseMeta;

  @Metadata({ data: "json, name=results", elemType: shared.NumbersV2RegulatoryComplianceBundleEvaluation })
  results?: shared.NumbersV2RegulatoryComplianceBundleEvaluation[];
}


export class ListEvaluationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listEvaluationResponse?: ListEvaluationListEvaluationResponse;

  @Metadata()
  statusCode: number;
}
