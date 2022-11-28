import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateUnderstandTaskServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateUnderstandTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class CreateUnderstandTaskCreateUnderstandTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Actions;" })
  actions?: any;

  @SpeakeasyMetadata({ data: "form, name=ActionsUrl;" })
  actionsUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName: string;
}


export class CreateUnderstandTaskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUnderstandTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateUnderstandTaskPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUnderstandTaskCreateUnderstandTaskRequest;

  @SpeakeasyMetadata()
  security: CreateUnderstandTaskSecurity;
}


export class CreateUnderstandTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewUnderstandAssistantTask?: shared.PreviewUnderstandAssistantTask;
}
