import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateMediaProcessorServerList = [
	"https://media.twilio.com",
] as const;


export class UpdateMediaProcessorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateMediaProcessorUpdateMediaProcessorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status: shared.MediaProcessorEnumUpdateStatusEnum;
}


export class UpdateMediaProcessorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateMediaProcessorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateMediaProcessorPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateMediaProcessorUpdateMediaProcessorRequest;

  @SpeakeasyMetadata()
  security: UpdateMediaProcessorSecurity;
}


export class UpdateMediaProcessorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  mediaV1MediaProcessor?: shared.MediaV1MediaProcessor;
}
