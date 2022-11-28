import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentKey } from "./agentkey";
import { Os } from "./os";
import { Timezone } from "./timezone";


export enum NodeAddMachineTypeEnum {
    Vmware = "vmware",
    Physical = "physical",
    Vm = "vm",
    Solariszone = "solariszone",
    Qemu = "qemu",
    Xen = "xen",
    Aixlpar = "aixlpar",
    Hyperv = "hyperv",
    Bsdjail = "bsdjail"
}

export enum NodeAddPolicyModeEnum {
    Enforce = "enforce",
    Audit = "audit"
}

export enum NodeAddPropertiesTagsEnum {
    Some = "some",
    Tags = "tags"
}


export class NodeAddPropertiesVars extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=var1" })
  var1?: string;

  @SpeakeasyMetadata({ data: "json, name=vars2" })
  vars2?: string;
}


// NodeAddProperties
/** 
 * Node properties in "key":"value" format, where "key" is a string, and "value" is either a string, a json array, or a json object. The following example shows you three example of &#58; &#173; a json array on the example of "tags":[ "some", "tags" ] &#173; a simple string on the example of "env":"prod" &#173; a complex json object on the example of "vars":{ "var1":"value1", "var2":"value2" } They are optional and can be used in any combination as long the keys are unique within the properties object.
**/
export class NodeAddProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=env" })
  env?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: NodeAddPropertiesTagsEnum[];

  @SpeakeasyMetadata({ data: "json, name=vars" })
  vars?: NodeAddPropertiesVars;
}

export enum NodeAddStateEnum {
    Enable = "enable",
    Ignored = "ignored",
    EmptyPolicies = "empty-policies",
    Initializing = "initializing",
    PreparingEol = "preparing-eol"
}

export enum NodeAddStatusEnum {
    Accepted = "accepted",
    Pending = "pending"
}


export class NodeAdd extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentKey" })
  agentKey?: AgentKey;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddresses" })
  ipAddresses: string[];

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType: NodeAddMachineTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os: Os;

  @SpeakeasyMetadata({ data: "json, name=policyMode" })
  policyMode?: NodeAddPolicyModeEnum;

  @SpeakeasyMetadata({ data: "json, name=policyServerId" })
  policyServerId?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: NodeAddProperties;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: NodeAddStateEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: NodeAddStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: Timezone;
}
