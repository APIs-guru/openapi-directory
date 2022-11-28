import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListVideoRoomSummaryServerList = [
	"https://insights.twilio.com",
] as const;


export class ListVideoRoomSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Codec" })
  codec?: shared.VideoRoomSummaryEnumCodecEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CreatedAfter" })
  createdAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CreatedBefore" })
  createdBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoomName" })
  roomName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoomType" })
  roomType?: shared.VideoRoomSummaryEnumRoomTypeEnum[];
}


export class ListVideoRoomSummarySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListVideoRoomSummaryListVideoRoomSummaryResponseMeta extends SpeakeasyBase {
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


export class ListVideoRoomSummaryListVideoRoomSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListVideoRoomSummaryListVideoRoomSummaryResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=rooms", elemType: shared.InsightsV1VideoRoomSummary })
  rooms?: shared.InsightsV1VideoRoomSummary[];
}


export class ListVideoRoomSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListVideoRoomSummaryQueryParams;

  @SpeakeasyMetadata()
  security: ListVideoRoomSummarySecurity;
}


export class ListVideoRoomSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listVideoRoomSummaryResponse?: ListVideoRoomSummaryListVideoRoomSummaryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
