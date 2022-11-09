import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CredentialTypeEnum {
    MiradoreApiKeyV1 = "miradore_api_key_v1"
,    AwsAccessSecret = "aws_access_secret"
}


export class Credential extends SpeakeasyBase {
  @Metadata({ data: "json, name=acl" })
  acl?: Map<string, any>;

  @Metadata({ data: "json, name=cidrs" })
  cidrs?: string[];

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: number;

  @Metadata({ data: "json, name=created_by_email" })
  createdByEmail?: string;

  @Metadata({ data: "json, name=created_by_id" })
  createdById?: string;

  @Metadata({ data: "json, name=global" })
  global?: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=last_used_at" })
  lastUsedAt?: number;

  @Metadata({ data: "json, name=last_used_by_id" })
  lastUsedById?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: CredentialTypeEnum;
}
