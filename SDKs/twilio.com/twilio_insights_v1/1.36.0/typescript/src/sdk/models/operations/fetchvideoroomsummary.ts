import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHVIDEOROOMSUMMARY_SERVERS = [
	"https://insights.twilio.com",
];



export class FetchVideoRoomSummaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class FetchVideoRoomSummarySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchVideoRoomSummaryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchVideoRoomSummaryPathParams;

  @Metadata()
  security: FetchVideoRoomSummarySecurity;
}


export class FetchVideoRoomSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  insightsV1VideoRoomSummary?: shared.InsightsV1VideoRoomSummary;
}
