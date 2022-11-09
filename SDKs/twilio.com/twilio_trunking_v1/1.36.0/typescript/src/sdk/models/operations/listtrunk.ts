import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTTRUNK_SERVERS = [
	"https://trunking.twilio.com",
];



export class ListTrunkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListTrunkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTrunkRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListTrunkQueryParams;

  @Metadata()
  security: ListTrunkSecurity;
}


export class ListTrunkListTrunkResponseMeta extends SpeakeasyBase {
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


export class ListTrunkListTrunkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListTrunkListTrunkResponseMeta;

  @Metadata({ data: "json, name=trunks", elemType: shared.TrunkingV1Trunk })
  trunks?: shared.TrunkingV1Trunk[];
}


export class ListTrunkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTrunkResponse?: ListTrunkListTrunkResponse;

  @Metadata()
  statusCode: number;
}
