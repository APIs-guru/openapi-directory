import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=counter" })
  counter?: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: number;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=inactive" })
  inactive?: boolean;

  @Metadata({ data: "json, name=last_used_at" })
  lastUsedAt?: number;

  @Metadata({ data: "json, name=last_used_ip" })
  lastUsedIp?: string;

  @Metadata({ data: "json, name=last_used_ua" })
  lastUsedUa?: string;

  @Metadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=usage_limit" })
  usageLimit?: number;

  @Metadata({ data: "json, name=usage_today" })
  usageToday?: number;
}
