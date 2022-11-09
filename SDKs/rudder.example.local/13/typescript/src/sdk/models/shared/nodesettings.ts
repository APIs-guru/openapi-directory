import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AgentKey } from "./agentkey";

export enum NodeSettingsPolicyModeEnum {
    Audit = "audit"
,    Enforce = "enforce"
,    Default = "default"
}


export class NodeSettingsProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=value" })
  value: any;
}

export enum NodeSettingsStateEnum {
    Enabled = "enabled"
,    Ignored = "ignored"
,    EmptyPolicies = "empty-policies"
,    Initializing = "initializing"
,    PreparingEol = "preparing-eol"
}


export class NodeSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentKey" })
  agentKey?: AgentKey;

  @Metadata({ data: "json, name=policyMode" })
  policyMode?: NodeSettingsPolicyModeEnum;

  @Metadata({ data: "json, name=properties", elemType: shared.NodeSettingsProperties })
  properties?: NodeSettingsProperties[];

  @Metadata({ data: "json, name=state" })
  state?: NodeSettingsStateEnum;
}
