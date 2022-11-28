import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateCompositionServerList = [
	"https://video.twilio.com",
] as const;

export enum CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateCompositionCreateCompositionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AudioSources;" })
  audioSources?: string[];

  @SpeakeasyMetadata({ data: "form, name=AudioSourcesExcluded;" })
  audioSourcesExcluded?: string[];

  @SpeakeasyMetadata({ data: "form, name=Format;" })
  format?: shared.CompositionEnumFormatEnum;

  @SpeakeasyMetadata({ data: "form, name=Resolution;" })
  resolution?: string;

  @SpeakeasyMetadata({ data: "form, name=RoomSid;" })
  roomSid: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Trim;" })
  trim?: boolean;

  @SpeakeasyMetadata({ data: "form, name=VideoLayout;" })
  videoLayout?: any;
}


export class CreateCompositionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCompositionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCompositionCreateCompositionRequest;

  @SpeakeasyMetadata()
  security: CreateCompositionSecurity;
}


export class CreateCompositionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoV1Composition?: shared.VideoV1Composition;
}
