import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListEvaluationServerList = [
	"https://numbers.twilio.com",
] as const;


export class ListEvaluationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" })
  bundleSid: string;
}


export class ListEvaluationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListEvaluationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListEvaluationListEvaluationResponseMeta extends SpeakeasyBase {
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


export class ListEvaluationListEvaluationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListEvaluationListEvaluationResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.NumbersV2RegulatoryComplianceBundleEvaluation })
  results?: shared.NumbersV2RegulatoryComplianceBundleEvaluation[];
}


export class ListEvaluationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListEvaluationPathParams;

  @SpeakeasyMetadata()
  queryParams: ListEvaluationQueryParams;

  @SpeakeasyMetadata()
  security: ListEvaluationSecurity;
}


export class ListEvaluationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listEvaluationResponse?: ListEvaluationListEvaluationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
