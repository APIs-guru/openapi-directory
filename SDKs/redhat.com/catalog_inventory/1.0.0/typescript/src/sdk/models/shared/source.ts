import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=archived_at" })
  archivedAt?: Date;

  @Metadata({ data: "json, name=availability_message" })
  availabilityMessage?: string;

  @Metadata({ data: "json, name=availability_status" })
  availabilityStatus?: string;

  @Metadata({ data: "json, name=cloud_connector_id" })
  cloudConnectorId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=info" })
  info?: Map<string, any>;

  @Metadata({ data: "json, name=last_available_at" })
  lastAvailableAt?: Date;

  @Metadata({ data: "json, name=last_checked_at" })
  lastCheckedAt?: Date;

  @Metadata({ data: "json, name=last_refresh_message" })
  lastRefreshMessage?: string;

  @Metadata({ data: "json, name=last_successful_refresh_at" })
  lastSuccessfulRefreshAt?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=previous_sha" })
  previousSha?: string;

  @Metadata({ data: "json, name=previous_size" })
  previousSize?: number;

  @Metadata({ data: "json, name=refresh_finished_at" })
  refreshFinishedAt?: Date;

  @Metadata({ data: "json, name=refresh_started_at" })
  refreshStartedAt?: Date;

  @Metadata({ data: "json, name=refresh_state" })
  refreshState?: string;

  @Metadata({ data: "json, name=refresh_task_id" })
  refreshTaskId?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
