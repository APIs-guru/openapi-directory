import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreatePlayerStreamerServerList = [
	"https://media.twilio.com",
] as const;

export enum CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreatePlayerStreamerCreatePlayerStreamerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=MaxDuration;" })
  maxDuration?: number;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Video;" })
  video?: boolean;
}


export class CreatePlayerStreamerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreatePlayerStreamerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreatePlayerStreamerCreatePlayerStreamerRequest;

  @SpeakeasyMetadata()
  security: CreatePlayerStreamerSecurity;
}


export class CreatePlayerStreamerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  mediaV1PlayerStreamer?: shared.MediaV1PlayerStreamer;
}
