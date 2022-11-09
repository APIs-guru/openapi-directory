import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEMEDIAPROCESSOR_SERVERS = [
	"https://media.twilio.com",
];



export class UpdateMediaProcessorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateMediaProcessorUpdateMediaProcessorRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Status;" })
  status: shared.MediaProcessorEnumUpdateStatusEnum;
}


export class UpdateMediaProcessorSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateMediaProcessorRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateMediaProcessorPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateMediaProcessorUpdateMediaProcessorRequest;

  @Metadata()
  security: UpdateMediaProcessorSecurity;
}


export class UpdateMediaProcessorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mediaV1MediaProcessor?: shared.MediaV1MediaProcessor;
}
