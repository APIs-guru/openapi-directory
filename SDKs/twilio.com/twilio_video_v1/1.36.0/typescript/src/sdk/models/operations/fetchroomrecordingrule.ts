import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHROOMRECORDINGRULE_SERVERS = [
	"https://video.twilio.com",
];



export class FetchRoomRecordingRulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class FetchRoomRecordingRuleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchRoomRecordingRuleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchRoomRecordingRulePathParams;

  @Metadata()
  security: FetchRoomRecordingRuleSecurity;
}


export class FetchRoomRecordingRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoV1RoomRoomRecordingRule?: shared.VideoV1RoomRoomRecordingRule;
}
