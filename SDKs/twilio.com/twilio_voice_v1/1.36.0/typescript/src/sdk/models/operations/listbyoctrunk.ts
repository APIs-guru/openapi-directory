import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTBYOCTRUNK_SERVERS = [
	"https://voice.twilio.com",
];



export class ListByocTrunkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListByocTrunkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListByocTrunkRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListByocTrunkQueryParams;

  @Metadata()
  security: ListByocTrunkSecurity;
}


export class ListByocTrunkListByocTrunkResponseMeta extends SpeakeasyBase {
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


export class ListByocTrunkListByocTrunkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=byoc_trunks", elemType: shared.VoiceV1ByocTrunk })
  byocTrunks?: shared.VoiceV1ByocTrunk[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListByocTrunkListByocTrunkResponseMeta;
}


export class ListByocTrunkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listByocTrunkResponse?: ListByocTrunkListByocTrunkResponse;

  @Metadata()
  statusCode: number;
}
