import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PayorCreateApiKeyRequestRolesEnum {
    PayorAdmin = "payor.admin",
    PayorSupport = "payor.support"
}
export declare class PayorCreateApiKeyRequest extends SpeakeasyBase {
    description?: string;
    name: string;
    roles: PayorCreateApiKeyRequestRolesEnum[];
}
