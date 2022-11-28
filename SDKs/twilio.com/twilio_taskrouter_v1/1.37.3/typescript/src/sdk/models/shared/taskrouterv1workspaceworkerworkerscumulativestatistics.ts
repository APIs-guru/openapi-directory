import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=activity_durations" })
  activityDurations?: any[];

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=reservations_accepted" })
  reservationsAccepted?: number;

  @SpeakeasyMetadata({ data: "json, name=reservations_canceled" })
  reservationsCanceled?: number;

  @SpeakeasyMetadata({ data: "json, name=reservations_created" })
  reservationsCreated?: number;

  @SpeakeasyMetadata({ data: "json, name=reservations_rejected" })
  reservationsRejected?: number;

  @SpeakeasyMetadata({ data: "json, name=reservations_rescinded" })
  reservationsRescinded?: number;

  @SpeakeasyMetadata({ data: "json, name=reservations_timed_out" })
  reservationsTimedOut?: number;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
