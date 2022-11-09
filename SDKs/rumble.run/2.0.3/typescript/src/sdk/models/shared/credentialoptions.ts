import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CredentialOptionsTypeEnum {
    MiradoreApiKeyV1 = "miradore_api_key_v1"
,    AwsAccessSecret = "aws_access_secret"
}


export class CredentialOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=acl" })
  acl?: Map<string, any>;

  @Metadata({ data: "json, name=cidrs" })
  cidrs?: string;

  @Metadata({ data: "json, name=global" })
  global?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: Map<string, any>;

  @Metadata({ data: "json, name=type" })
  type?: CredentialOptionsTypeEnum;
}
