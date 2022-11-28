import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HookEventTypeEnum {
    All = "all",
    Check = "check"
}
export declare enum HookStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
/**
 * Represents a hook configuration
**/
export declare class Hook extends SpeakeasyBase {
    actions?: string[];
    eventType?: HookEventTypeEnum;
    signingKey?: string;
    status?: HookStatusEnum;
    subscriberType?: string;
    subscriberUrl?: string;
}
