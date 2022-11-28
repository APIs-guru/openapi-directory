import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchVideoRoomSummaryServerList = [
	"https://insights.twilio.com",
] as const;


export class FetchVideoRoomSummaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class FetchVideoRoomSummarySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchVideoRoomSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchVideoRoomSummaryPathParams;

  @SpeakeasyMetadata()
  security: FetchVideoRoomSummarySecurity;
}


export class FetchVideoRoomSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  insightsV1VideoRoomSummary?: shared.InsightsV1VideoRoomSummary;
}
