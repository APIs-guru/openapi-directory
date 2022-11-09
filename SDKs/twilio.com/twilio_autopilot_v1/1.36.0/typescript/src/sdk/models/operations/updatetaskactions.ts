import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATETASKACTIONS_SERVERS = [
	"https://autopilot.twilio.com",
];



export class UpdateTaskActionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class UpdateTaskActionsUpdateTaskActionsRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Actions;" })
  actions?: any;
}


export class UpdateTaskActionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateTaskActionsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateTaskActionsPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateTaskActionsUpdateTaskActionsRequest;

  @Metadata()
  security: UpdateTaskActionsSecurity;
}


export class UpdateTaskActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  autopilotV1AssistantTaskTaskActions?: shared.AutopilotV1AssistantTaskTaskActions;
}
