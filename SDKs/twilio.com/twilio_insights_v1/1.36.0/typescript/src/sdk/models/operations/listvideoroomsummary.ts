import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTVIDEOROOMSUMMARY_SERVERS = [
	"https://insights.twilio.com",
];



export class ListVideoRoomSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Codec" })
  codec?: shared.VideoRoomSummaryEnumCodecEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=CreatedAfter" })
  createdAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CreatedBefore" })
  createdBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RoomName" })
  roomName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RoomType" })
  roomType?: shared.VideoRoomSummaryEnumRoomTypeEnum[];
}


export class ListVideoRoomSummarySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListVideoRoomSummaryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListVideoRoomSummaryQueryParams;

  @Metadata()
  security: ListVideoRoomSummarySecurity;
}


export class ListVideoRoomSummaryListVideoRoomSummaryResponseMeta extends SpeakeasyBase {
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


export class ListVideoRoomSummaryListVideoRoomSummaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListVideoRoomSummaryListVideoRoomSummaryResponseMeta;

  @Metadata({ data: "json, name=rooms", elemType: shared.InsightsV1VideoRoomSummary })
  rooms?: shared.InsightsV1VideoRoomSummary[];
}


export class ListVideoRoomSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listVideoRoomSummaryResponse?: ListVideoRoomSummaryListVideoRoomSummaryResponse;

  @Metadata()
  statusCode: number;
}
