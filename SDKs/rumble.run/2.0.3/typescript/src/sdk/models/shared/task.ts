import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Task extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agent_id" })
  agentId?: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=created_by_user_id" })
  createdByUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=cruncher_id" })
  cruncherId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=recur" })
  recur?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recur_frequency" })
  recurFrequency?: string;

  @SpeakeasyMetadata({ data: "json, name=recur_last" })
  recurLast?: number;

  @SpeakeasyMetadata({ data: "json, name=recur_last_task_id" })
  recurLastTaskId?: string;

  @SpeakeasyMetadata({ data: "json, name=recur_next" })
  recurNext?: number;

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: number;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: number;
}
