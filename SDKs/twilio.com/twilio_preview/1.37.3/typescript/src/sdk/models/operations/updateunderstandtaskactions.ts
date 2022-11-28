import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateUnderstandTaskActionsServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateUnderstandTaskActionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Actions;" })
  actions?: any;
}


export class UpdateUnderstandTaskActionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUnderstandTaskActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateUnderstandTaskActionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest;

  @SpeakeasyMetadata()
  security: UpdateUnderstandTaskActionsSecurity;
}


export class UpdateUnderstandTaskActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewUnderstandAssistantTaskTaskActions?: shared.PreviewUnderstandAssistantTaskTaskActions;
}
