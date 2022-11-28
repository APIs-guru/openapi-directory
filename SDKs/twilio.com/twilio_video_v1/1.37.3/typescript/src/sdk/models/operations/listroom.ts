import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListRoomServerList = [
	"https://video.twilio.com",
] as const;


export class ListRoomQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" })
  dateCreatedAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" })
  dateCreatedBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.RoomEnumRoomStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UniqueName" })
  uniqueName?: string;
}


export class ListRoomSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRoomListRoomResponseMeta extends SpeakeasyBase {
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


export class ListRoomListRoomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListRoomListRoomResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=rooms", elemType: shared.VideoV1Room })
  rooms?: shared.VideoV1Room[];
}


export class ListRoomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListRoomQueryParams;

  @SpeakeasyMetadata()
  security: ListRoomSecurity;
}


export class ListRoomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listRoomResponse?: ListRoomListRoomResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
