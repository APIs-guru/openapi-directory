import { SpeakeasyBase } from "../../../internal/utils";
import { ProductsEnum } from "./productsenum";
import { SandboxPublicTokenCreateRequestOptions } from "./sandboxpublictokencreaterequestoptions";
/**
 * SandboxPublicTokenCreateRequest defines the request schema for `/sandbox/public_token/create`
**/
export declare class SandboxPublicTokenCreateRequest extends SpeakeasyBase {
    clientId?: string;
    initialProducts: ProductsEnum[];
    institutionId: string;
    options?: SandboxPublicTokenCreateRequestOptions;
    secret?: string;
}
