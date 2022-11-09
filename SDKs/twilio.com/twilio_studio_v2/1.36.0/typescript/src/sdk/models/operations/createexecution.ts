import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEEXECUTION_SERVERS = [
	"https://studio.twilio.com",
];



export class CreateExecutionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;
}


export class CreateExecutionCreateExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=From;" })
  from: string;

  @Metadata({ data: "form, name=Parameters;" })
  parameters?: any;

  @Metadata({ data: "form, name=To;" })
  to: string;
}


export class CreateExecutionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateExecutionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateExecutionPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateExecutionCreateExecutionRequest;

  @Metadata()
  security: CreateExecutionSecurity;
}


export class CreateExecutionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  studioV2FlowExecution?: shared.StudioV2FlowExecution;
}
