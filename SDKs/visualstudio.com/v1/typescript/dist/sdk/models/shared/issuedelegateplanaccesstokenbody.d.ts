import { SpeakeasyBase } from "../../../internal/utils";
import { DelegateIdentity } from "./delegateidentity";
export declare class IssueDelegatePlanAccessTokenBody extends SpeakeasyBase {
    environmentIds?: string[];
    expiration?: Date;
    identity?: DelegateIdentity;
    scope?: string;
}
