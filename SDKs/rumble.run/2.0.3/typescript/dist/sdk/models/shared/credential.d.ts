import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CredentialTypeEnum {
    MiradoreApiKeyV1 = "miradore_api_key_v1",
    AwsAccessSecret = "aws_access_secret"
}
export declare class Credential extends SpeakeasyBase {
    acl?: Map<string, any>;
    cidrs?: string[];
    clientId?: string;
    createdAt?: number;
    createdByEmail?: string;
    createdById?: string;
    global?: boolean;
    id: string;
    lastUsedAt?: number;
    lastUsedById?: string;
    name?: string;
    type?: CredentialTypeEnum;
}
