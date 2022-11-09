import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTVIDEOPARTICIPANTSUMMARY_SERVERS = [
	"https://insights.twilio.com",
];



export class ListVideoParticipantSummaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class ListVideoParticipantSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListVideoParticipantSummarySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListVideoParticipantSummaryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListVideoParticipantSummaryPathParams;

  @Metadata()
  queryParams: ListVideoParticipantSummaryQueryParams;

  @Metadata()
  security: ListVideoParticipantSummarySecurity;
}


export class ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta extends SpeakeasyBase {
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


export class ListVideoParticipantSummaryListVideoParticipantSummaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta;

  @Metadata({ data: "json, name=participants", elemType: shared.InsightsV1VideoRoomSummaryVideoParticipantSummary })
  participants?: shared.InsightsV1VideoRoomSummaryVideoParticipantSummary[];
}


export class ListVideoParticipantSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listVideoParticipantSummaryResponse?: ListVideoParticipantSummaryListVideoParticipantSummaryResponse;

  @Metadata()
  statusCode: number;
}
