import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CredentialOptionsTypeEnum {
    MiradoreApiKeyV1 = "miradore_api_key_v1",
    AwsAccessSecret = "aws_access_secret"
}
export declare class CredentialOptions extends SpeakeasyBase {
    acl?: Map<string, any>;
    cidrs?: string;
    global?: boolean;
    name?: string;
    secret?: Map<string, any>;
    type?: CredentialOptionsTypeEnum;
}
