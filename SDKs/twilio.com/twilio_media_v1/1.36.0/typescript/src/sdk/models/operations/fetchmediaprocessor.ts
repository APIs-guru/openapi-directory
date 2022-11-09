import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHMEDIAPROCESSOR_SERVERS = [
	"https://media.twilio.com",
];



export class FetchMediaProcessorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchMediaProcessorSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchMediaProcessorRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchMediaProcessorPathParams;

  @Metadata()
  security: FetchMediaProcessorSecurity;
}


export class FetchMediaProcessorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mediaV1MediaProcessor?: shared.MediaV1MediaProcessor;
}
