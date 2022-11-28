import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CredentialOptionsTypeEnum {
    MiradoreApiKeyV1 = "miradore_api_key_v1",
    AwsAccessSecret = "aws_access_secret"
}


export class CredentialOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acl" })
  acl?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=cidrs" })
  cidrs?: string;

  @SpeakeasyMetadata({ data: "json, name=global" })
  global?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CredentialOptionsTypeEnum;
}
