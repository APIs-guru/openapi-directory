import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEUNDERSTANDTASKACTIONS_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateUnderstandTaskActionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Actions;" })
  actions?: any;
}


export class UpdateUnderstandTaskActionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUnderstandTaskActionsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateUnderstandTaskActionsPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest;

  @Metadata()
  security: UpdateUnderstandTaskActionsSecurity;
}


export class UpdateUnderstandTaskActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewUnderstandAssistantTaskTaskActions?: shared.PreviewUnderstandAssistantTaskTaskActions;
}
