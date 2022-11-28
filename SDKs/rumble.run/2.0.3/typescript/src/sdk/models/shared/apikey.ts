import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=counter" })
  counter?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=inactive" })
  inactive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_used_at" })
  lastUsedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=last_used_ip" })
  lastUsedIp?: string;

  @SpeakeasyMetadata({ data: "json, name=last_used_ua" })
  lastUsedUa?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=usage_limit" })
  usageLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=usage_today" })
  usageToday?: number;
}
