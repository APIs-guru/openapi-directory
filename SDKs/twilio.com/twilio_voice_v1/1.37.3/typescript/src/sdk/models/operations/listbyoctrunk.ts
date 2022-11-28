import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListByocTrunkServerList = [
	"https://voice.twilio.com",
] as const;


export class ListByocTrunkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListByocTrunkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListByocTrunkListByocTrunkResponseMeta extends SpeakeasyBase {
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


export class ListByocTrunkListByocTrunkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=byoc_trunks", elemType: shared.VoiceV1ByocTrunk })
  byocTrunks?: shared.VoiceV1ByocTrunk[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListByocTrunkListByocTrunkResponseMeta;
}


export class ListByocTrunkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListByocTrunkQueryParams;

  @SpeakeasyMetadata()
  security: ListByocTrunkSecurity;
}


export class ListByocTrunkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listByocTrunkResponse?: ListByocTrunkListByocTrunkResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
