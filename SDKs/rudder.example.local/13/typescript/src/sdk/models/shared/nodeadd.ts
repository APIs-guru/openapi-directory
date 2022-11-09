import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AgentKey } from "./agentkey";
import { Os } from "./os";
import { Timezone } from "./timezone";

export enum NodeAddMachineTypeEnum {
    Vmware = "vmware"
,    Physical = "physical"
,    Vm = "vm"
,    Solariszone = "solariszone"
,    Qemu = "qemu"
,    Xen = "xen"
,    Aixlpar = "aixlpar"
,    Hyperv = "hyperv"
,    Bsdjail = "bsdjail"
}

export enum NodeAddPolicyModeEnum {
    Enforce = "enforce"
,    Audit = "audit"
}

export enum NodeAddPropertiesTagsEnum {
    Some = "some"
,    Tags = "tags"
}


export class NodeAddPropertiesVars extends SpeakeasyBase {
  @Metadata({ data: "json, name=var1" })
  var1?: string;

  @Metadata({ data: "json, name=vars2" })
  vars2?: string;
}


// NodeAddProperties
/** 
 * Node properties in "key":"value" format, where "key" is a string, and "value" is either a string, a json array, or a json object. The following example shows you three example of &#58; &#173; a json array on the example of "tags":[ "some", "tags" ] &#173; a simple string on the example of "env":"prod" &#173; a complex json object on the example of "vars":{ "var1":"value1", "var2":"value2" } They are optional and can be used in any combination as long the keys are unique within the properties object.
**/
export class NodeAddProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=env" })
  env?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: NodeAddPropertiesTagsEnum[];

  @Metadata({ data: "json, name=vars" })
  vars?: NodeAddPropertiesVars;
}

export enum NodeAddStateEnum {
    Enable = "enable"
,    Ignored = "ignored"
,    EmptyPolicies = "empty-policies"
,    Initializing = "initializing"
,    PreparingEol = "preparing-eol"
}

export enum NodeAddStatusEnum {
    Accepted = "accepted"
,    Pending = "pending"
}


export class NodeAdd extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentKey" })
  agentKey?: AgentKey;

  @Metadata({ data: "json, name=hostname" })
  hostname: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=ipAddresses" })
  ipAddresses: string[];

  @Metadata({ data: "json, name=machineType" })
  machineType: NodeAddMachineTypeEnum;

  @Metadata({ data: "json, name=os" })
  os: Os;

  @Metadata({ data: "json, name=policyMode" })
  policyMode?: NodeAddPolicyModeEnum;

  @Metadata({ data: "json, name=policyServerId" })
  policyServerId?: string;

  @Metadata({ data: "json, name=properties" })
  properties: NodeAddProperties;

  @Metadata({ data: "json, name=state" })
  state?: NodeAddStateEnum;

  @Metadata({ data: "json, name=status" })
  status: NodeAddStatusEnum;

  @Metadata({ data: "json, name=timezone" })
  timezone?: Timezone;
}
