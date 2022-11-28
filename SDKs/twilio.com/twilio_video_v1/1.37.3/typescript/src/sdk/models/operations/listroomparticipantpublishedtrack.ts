import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListRoomParticipantPublishedTrackServerList = [
	"https://video.twilio.com",
] as const;


export class ListRoomParticipantPublishedTrackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" })
  participantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class ListRoomParticipantPublishedTrackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListRoomParticipantPublishedTrackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta extends SpeakeasyBase {
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


export class ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=published_tracks", elemType: shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack })
  publishedTracks?: shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack[];
}


export class ListRoomParticipantPublishedTrackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListRoomParticipantPublishedTrackPathParams;

  @SpeakeasyMetadata()
  queryParams: ListRoomParticipantPublishedTrackQueryParams;

  @SpeakeasyMetadata()
  security: ListRoomParticipantPublishedTrackSecurity;
}


export class ListRoomParticipantPublishedTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listRoomParticipantPublishedTrackResponse?: ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
