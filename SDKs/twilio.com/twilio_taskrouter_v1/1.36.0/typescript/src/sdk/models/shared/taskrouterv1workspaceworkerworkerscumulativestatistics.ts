import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=activity_durations" })
  activityDurations?: any[];

  @Metadata({ data: "json, name=end_time" })
  endTime?: Date;

  @Metadata({ data: "json, name=reservations_accepted" })
  reservationsAccepted?: number;

  @Metadata({ data: "json, name=reservations_canceled" })
  reservationsCanceled?: number;

  @Metadata({ data: "json, name=reservations_created" })
  reservationsCreated?: number;

  @Metadata({ data: "json, name=reservations_rejected" })
  reservationsRejected?: number;

  @Metadata({ data: "json, name=reservations_rescinded" })
  reservationsRescinded?: number;

  @Metadata({ data: "json, name=reservations_timed_out" })
  reservationsTimedOut?: number;

  @Metadata({ data: "json, name=start_time" })
  startTime?: Date;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
