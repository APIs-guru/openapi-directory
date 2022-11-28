import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=cumulative" })
  cumulative?: any;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=worker_sid" })
  workerSid?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
