import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=activity_statistics" })
  activityStatistics?: any[];

  @SpeakeasyMetadata({ data: "json, name=total_workers" })
  totalWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
