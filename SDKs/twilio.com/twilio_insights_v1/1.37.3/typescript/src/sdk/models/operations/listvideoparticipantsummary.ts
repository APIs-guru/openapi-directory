import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListVideoParticipantSummaryServerList = [
	"https://insights.twilio.com",
] as const;


export class ListVideoParticipantSummaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class ListVideoParticipantSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListVideoParticipantSummarySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta extends SpeakeasyBase {
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


export class ListVideoParticipantSummaryListVideoParticipantSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: shared.InsightsV1VideoRoomSummaryVideoParticipantSummary })
  participants?: shared.InsightsV1VideoRoomSummaryVideoParticipantSummary[];
}


export class ListVideoParticipantSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListVideoParticipantSummaryPathParams;

  @SpeakeasyMetadata()
  queryParams: ListVideoParticipantSummaryQueryParams;

  @SpeakeasyMetadata()
  security: ListVideoParticipantSummarySecurity;
}


export class ListVideoParticipantSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listVideoParticipantSummaryResponse?: ListVideoParticipantSummaryListVideoParticipantSummaryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
