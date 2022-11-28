import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateQueryServerList = [
	"https://autopilot.twilio.com",
] as const;


export class CreateQueryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class CreateQueryCreateQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Language;" })
  language: string;

  @SpeakeasyMetadata({ data: "form, name=ModelBuild;" })
  modelBuild?: string;

  @SpeakeasyMetadata({ data: "form, name=Query;" })
  query: string;

  @SpeakeasyMetadata({ data: "form, name=Tasks;" })
  tasks?: string;
}


export class CreateQuerySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateQueryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateQueryCreateQueryRequest;

  @SpeakeasyMetadata()
  security: CreateQuerySecurity;
}


export class CreateQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  autopilotV1AssistantQuery?: shared.AutopilotV1AssistantQuery;
}
