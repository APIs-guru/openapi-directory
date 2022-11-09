import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaskrouterV1WorkspaceWorkflowWorkflowStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=cumulative" })
  cumulative?: any;

  @Metadata({ data: "json, name=realtime" })
  realtime?: any;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=workflow_sid" })
  workflowSid?: string;

  @Metadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
