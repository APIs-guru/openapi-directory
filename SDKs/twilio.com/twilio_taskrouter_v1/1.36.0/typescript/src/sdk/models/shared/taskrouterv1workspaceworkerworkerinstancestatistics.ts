import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=cumulative" })
  cumulative?: any;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=worker_sid" })
  workerSid?: string;

  @Metadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
