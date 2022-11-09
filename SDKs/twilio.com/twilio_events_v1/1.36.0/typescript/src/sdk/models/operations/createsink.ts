import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESINK_SERVERS = [
	"https://events.twilio.com",
];



export class CreateSinkCreateSinkRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Description;" })
  description: string;

  @Metadata({ data: "form, name=SinkConfiguration;" })
  sinkConfiguration: any;

  @Metadata({ data: "form, name=SinkType;" })
  sinkType: shared.SinkEnumSinkTypeEnum;
}


export class CreateSinkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSinkRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSinkCreateSinkRequest;

  @Metadata()
  security: CreateSinkSecurity;
}


export class CreateSinkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  eventsV1Sink?: shared.EventsV1Sink;
}
