import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateRoomServerList = [
	"https://video.twilio.com",
] as const;

export enum CreateRoomCreateRoomRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateRoomCreateRoomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AudioOnly;" })
  audioOnly?: boolean;

  @SpeakeasyMetadata({ data: "form, name=EmptyRoomTimeout;" })
  emptyRoomTimeout?: number;

  @SpeakeasyMetadata({ data: "form, name=EnableTurn;" })
  enableTurn?: boolean;

  @SpeakeasyMetadata({ data: "form, name=LargeRoom;" })
  largeRoom?: boolean;

  @SpeakeasyMetadata({ data: "form, name=MaxParticipantDuration;" })
  maxParticipantDuration?: number;

  @SpeakeasyMetadata({ data: "form, name=MaxParticipants;" })
  maxParticipants?: number;

  @SpeakeasyMetadata({ data: "form, name=MediaRegion;" })
  mediaRegion?: string;

  @SpeakeasyMetadata({ data: "form, name=RecordParticipantsOnConnect;" })
  recordParticipantsOnConnect?: boolean;

  @SpeakeasyMetadata({ data: "form, name=RecordingRules;" })
  recordingRules?: any;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateRoomCreateRoomRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Type;" })
  type?: shared.RoomEnumRoomTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;

  @SpeakeasyMetadata({ data: "form, name=UnusedRoomTimeout;" })
  unusedRoomTimeout?: number;

  @SpeakeasyMetadata({ data: "form, name=VideoCodecs;" })
  videoCodecs?: shared.RoomEnumVideoCodecEnum[];
}


export class CreateRoomSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateRoomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateRoomCreateRoomRequest;

  @SpeakeasyMetadata()
  security: CreateRoomSecurity;
}


export class CreateRoomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoV1Room?: shared.VideoV1Room;
}
