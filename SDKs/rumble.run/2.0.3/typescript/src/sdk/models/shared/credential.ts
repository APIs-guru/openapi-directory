import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CredentialTypeEnum {
    MiradoreApiKeyV1 = "miradore_api_key_v1",
    AwsAccessSecret = "aws_access_secret"
}


export class Credential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acl" })
  acl?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=cidrs" })
  cidrs?: string[];

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=created_by_email" })
  createdByEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=created_by_id" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=global" })
  global?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=last_used_at" })
  lastUsedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=last_used_by_id" })
  lastUsedById?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CredentialTypeEnum;
}
