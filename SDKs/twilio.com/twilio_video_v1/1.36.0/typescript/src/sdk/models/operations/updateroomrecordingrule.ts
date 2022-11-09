import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEROOMRECORDINGRULE_SERVERS = [
	"https://video.twilio.com",
];



export class UpdateRoomRecordingRulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Rules;" })
  rules?: any;
}


export class UpdateRoomRecordingRuleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateRoomRecordingRuleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateRoomRecordingRulePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest;

  @Metadata()
  security: UpdateRoomRecordingRuleSecurity;
}


export class UpdateRoomRecordingRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoV1RoomRoomRecordingRule?: shared.VideoV1RoomRoomRecordingRule;
}
