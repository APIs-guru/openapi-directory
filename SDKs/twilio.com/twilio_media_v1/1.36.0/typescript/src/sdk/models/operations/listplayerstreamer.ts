import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTPLAYERSTREAMER_SERVERS = [
	"https://media.twilio.com",
];



export class ListPlayerStreamerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.PlayerStreamerEnumOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.PlayerStreamerEnumStatusEnum;
}


export class ListPlayerStreamerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListPlayerStreamerRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListPlayerStreamerQueryParams;

  @Metadata()
  security: ListPlayerStreamerSecurity;
}


export class ListPlayerStreamerListPlayerStreamerResponseMeta extends SpeakeasyBase {
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


export class ListPlayerStreamerListPlayerStreamerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListPlayerStreamerListPlayerStreamerResponseMeta;

  @Metadata({ data: "json, name=player_streamers", elemType: shared.MediaV1PlayerStreamer })
  playerStreamers?: shared.MediaV1PlayerStreamer[];
}


export class ListPlayerStreamerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listPlayerStreamerResponse?: ListPlayerStreamerListPlayerStreamerResponse;

  @Metadata()
  statusCode: number;
}
