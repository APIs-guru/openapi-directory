import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateTaskActionsServerList = [
	"https://autopilot.twilio.com",
] as const;


export class UpdateTaskActionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class UpdateTaskActionsUpdateTaskActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Actions;" })
  actions?: any;
}


export class UpdateTaskActionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateTaskActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateTaskActionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateTaskActionsUpdateTaskActionsRequest;

  @SpeakeasyMetadata()
  security: UpdateTaskActionsSecurity;
}


export class UpdateTaskActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  autopilotV1AssistantTaskTaskActions?: shared.AutopilotV1AssistantTaskTaskActions;
}
