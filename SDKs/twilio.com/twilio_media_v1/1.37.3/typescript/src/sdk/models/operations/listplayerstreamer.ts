import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListPlayerStreamerServerList = [
	"https://media.twilio.com",
] as const;


export class ListPlayerStreamerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.PlayerStreamerEnumOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.PlayerStreamerEnumStatusEnum;
}


export class ListPlayerStreamerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListPlayerStreamerListPlayerStreamerResponseMeta extends SpeakeasyBase {
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


export class ListPlayerStreamerListPlayerStreamerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListPlayerStreamerListPlayerStreamerResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=player_streamers", elemType: shared.MediaV1PlayerStreamer })
  playerStreamers?: shared.MediaV1PlayerStreamer[];
}


export class ListPlayerStreamerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListPlayerStreamerQueryParams;

  @SpeakeasyMetadata()
  security: ListPlayerStreamerSecurity;
}


export class ListPlayerStreamerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listPlayerStreamerResponse?: ListPlayerStreamerListPlayerStreamerResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
