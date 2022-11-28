import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentKey } from "./agentkey";


export enum NodeSettingsPolicyModeEnum {
    Audit = "audit",
    Enforce = "enforce",
    Default = "default"
}


export class NodeSettingsProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: any;
}

export enum NodeSettingsStateEnum {
    Enabled = "enabled",
    Ignored = "ignored",
    EmptyPolicies = "empty-policies",
    Initializing = "initializing",
    PreparingEol = "preparing-eol"
}


export class NodeSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentKey" })
  agentKey?: AgentKey;

  @SpeakeasyMetadata({ data: "json, name=policyMode" })
  policyMode?: NodeSettingsPolicyModeEnum;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: NodeSettingsProperties })
  properties?: NodeSettingsProperties[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: NodeSettingsStateEnum;
}
