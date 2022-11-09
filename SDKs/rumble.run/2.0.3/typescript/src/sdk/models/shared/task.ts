import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Task extends SpeakeasyBase {
  @Metadata({ data: "json, name=agent_id" })
  agentId?: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: number;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=created_by_user_id" })
  createdByUserId?: string;

  @Metadata({ data: "json, name=cruncher_id" })
  cruncherId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @Metadata({ data: "json, name=params" })
  params?: Map<string, string>;

  @Metadata({ data: "json, name=parent_id" })
  parentId?: string;

  @Metadata({ data: "json, name=recur" })
  recur?: boolean;

  @Metadata({ data: "json, name=recur_frequency" })
  recurFrequency?: string;

  @Metadata({ data: "json, name=recur_last" })
  recurLast?: number;

  @Metadata({ data: "json, name=recur_last_task_id" })
  recurLastTaskId?: string;

  @Metadata({ data: "json, name=recur_next" })
  recurNext?: number;

  @Metadata({ data: "json, name=site_id" })
  siteId?: string;

  @Metadata({ data: "json, name=start_time" })
  startTime?: number;

  @Metadata({ data: "json, name=stats" })
  stats?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: number;
}
