import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSinkServerList = [
	"https://events.twilio.com",
] as const;


export class CreateSinkCreateSinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Description;" })
  description: string;

  @SpeakeasyMetadata({ data: "form, name=SinkConfiguration;" })
  sinkConfiguration: any;

  @SpeakeasyMetadata({ data: "form, name=SinkType;" })
  sinkType: shared.SinkEnumSinkTypeEnum;
}


export class CreateSinkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSinkCreateSinkRequest;

  @SpeakeasyMetadata()
  security: CreateSinkSecurity;
}


export class CreateSinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  eventsV1Sink?: shared.EventsV1Sink;
}
