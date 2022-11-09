import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTPOLICIES_SERVERS = [
	"https://trusthub.twilio.com",
];



export class ListPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListPoliciesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListPoliciesQueryParams;

  @Metadata()
  security: ListPoliciesSecurity;
}


export class ListPoliciesListPoliciesResponseMeta extends SpeakeasyBase {
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


export class ListPoliciesListPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListPoliciesListPoliciesResponseMeta;

  @Metadata({ data: "json, name=results", elemType: shared.TrusthubV1Policies })
  results?: shared.TrusthubV1Policies[];
}


export class ListPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listPoliciesResponse?: ListPoliciesListPoliciesResponse;

  @Metadata()
  statusCode: number;
}
