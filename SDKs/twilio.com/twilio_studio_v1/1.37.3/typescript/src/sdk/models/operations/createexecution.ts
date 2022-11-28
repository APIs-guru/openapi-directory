import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateExecutionServerList = [
	"https://studio.twilio.com",
] as const;


export class CreateExecutionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;
}


export class CreateExecutionCreateExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=From;" })
  from: string;

  @SpeakeasyMetadata({ data: "form, name=Parameters;" })
  parameters?: any;

  @SpeakeasyMetadata({ data: "form, name=To;" })
  to: string;
}


export class CreateExecutionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateExecutionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateExecutionCreateExecutionRequest;

  @SpeakeasyMetadata()
  security: CreateExecutionSecurity;
}


export class CreateExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  studioV1FlowExecution?: shared.StudioV1FlowExecution;
}
