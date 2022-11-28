import { SpeakeasyBase } from "../../../internal/utils";
import { AgentKey } from "./agentkey";
export declare enum NodeSettingsPolicyModeEnum {
    Audit = "audit",
    Enforce = "enforce",
    Default = "default"
}
export declare class NodeSettingsProperties extends SpeakeasyBase {
    name: string;
    value: any;
}
export declare enum NodeSettingsStateEnum {
    Enabled = "enabled",
    Ignored = "ignored",
    EmptyPolicies = "empty-policies",
    Initializing = "initializing",
    PreparingEol = "preparing-eol"
}
export declare class NodeSettings extends SpeakeasyBase {
    agentKey?: AgentKey;
    policyMode?: NodeSettingsPolicyModeEnum;
    properties?: NodeSettingsProperties[];
    state?: NodeSettingsStateEnum;
}
