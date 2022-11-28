import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdatePlayerStreamerServerList = [
	"https://media.twilio.com",
] as const;


export class UpdatePlayerStreamerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdatePlayerStreamerUpdatePlayerStreamerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status: shared.PlayerStreamerEnumUpdateStatusEnum;
}


export class UpdatePlayerStreamerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdatePlayerStreamerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdatePlayerStreamerPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdatePlayerStreamerUpdatePlayerStreamerRequest;

  @SpeakeasyMetadata()
  security: UpdatePlayerStreamerSecurity;
}


export class UpdatePlayerStreamerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  mediaV1PlayerStreamer?: shared.MediaV1PlayerStreamer;
}
