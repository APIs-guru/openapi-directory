import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEROOM_SERVERS = [
	"https://video.twilio.com",
];


export enum CreateRoomCreateRoomRequestStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateRoomCreateRoomRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AudioOnly;" })
  audioOnly?: boolean;

  @Metadata({ data: "form, name=EmptyRoomTimeout;" })
  emptyRoomTimeout?: number;

  @Metadata({ data: "form, name=EnableTurn;" })
  enableTurn?: boolean;

  @Metadata({ data: "form, name=LargeRoom;" })
  largeRoom?: boolean;

  @Metadata({ data: "form, name=MaxParticipantDuration;" })
  maxParticipantDuration?: number;

  @Metadata({ data: "form, name=MaxParticipants;" })
  maxParticipants?: number;

  @Metadata({ data: "form, name=MediaRegion;" })
  mediaRegion?: string;

  @Metadata({ data: "form, name=RecordParticipantsOnConnect;" })
  recordParticipantsOnConnect?: boolean;

  @Metadata({ data: "form, name=RecordingRules;" })
  recordingRules?: any;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @Metadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateRoomCreateRoomRequestStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=Type;" })
  type?: shared.RoomEnumRoomTypeEnum;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;

  @Metadata({ data: "form, name=UnusedRoomTimeout;" })
  unusedRoomTimeout?: number;

  @Metadata({ data: "form, name=VideoCodecs;" })
  videoCodecs?: shared.RoomEnumVideoCodecEnum[];
}


export class CreateRoomSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateRoomRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateRoomCreateRoomRequest;

  @Metadata()
  security: CreateRoomSecurity;
}


export class CreateRoomResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoV1Room?: shared.VideoV1Room;
}
