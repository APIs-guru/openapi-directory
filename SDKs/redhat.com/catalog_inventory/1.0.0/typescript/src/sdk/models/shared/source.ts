import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived_at" })
  archivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=availability_message" })
  availabilityMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=availability_status" })
  availabilityStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=cloud_connector_id" })
  cloudConnectorId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=last_available_at" })
  lastAvailableAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_checked_at" })
  lastCheckedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_refresh_message" })
  lastRefreshMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=last_successful_refresh_at" })
  lastSuccessfulRefreshAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=previous_sha" })
  previousSha?: string;

  @SpeakeasyMetadata({ data: "json, name=previous_size" })
  previousSize?: number;

  @SpeakeasyMetadata({ data: "json, name=refresh_finished_at" })
  refreshFinishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=refresh_started_at" })
  refreshStartedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=refresh_state" })
  refreshState?: string;

  @SpeakeasyMetadata({ data: "json, name=refresh_task_id" })
  refreshTaskId?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
