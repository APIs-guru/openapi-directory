import { SpeakeasyBase } from "../../../internal/utils";
import { AgentKey } from "./agentkey";
import { Os } from "./os";
import { Timezone } from "./timezone";
export declare enum NodeAddMachineTypeEnum {
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
export declare enum NodeAddPolicyModeEnum {
    Enforce = "enforce",
    Audit = "audit"
}
export declare enum NodeAddPropertiesTagsEnum {
    Some = "some",
    Tags = "tags"
}
export declare class NodeAddPropertiesVars extends SpeakeasyBase {
    var1?: string;
    vars2?: string;
}
/**
 * Node properties in "key":"value" format, where "key" is a string, and "value" is either a string, a json array, or a json object. The following example shows you three example of &#58; &#173; a json array on the example of "tags":[ "some", "tags" ] &#173; a simple string on the example of "env":"prod" &#173; a complex json object on the example of "vars":{ "var1":"value1", "var2":"value2" } They are optional and can be used in any combination as long the keys are unique within the properties object.
**/
export declare class NodeAddProperties extends SpeakeasyBase {
    env?: string;
    tags?: NodeAddPropertiesTagsEnum[];
    vars?: NodeAddPropertiesVars;
}
export declare enum NodeAddStateEnum {
    Enable = "enable",
    Ignored = "ignored",
    EmptyPolicies = "empty-policies",
    Initializing = "initializing",
    PreparingEol = "preparing-eol"
}
export declare enum NodeAddStatusEnum {
    Accepted = "accepted",
    Pending = "pending"
}
export declare class NodeAdd extends SpeakeasyBase {
    agentKey?: AgentKey;
    hostname: string;
    id: string;
    ipAddresses: string[];
    machineType: NodeAddMachineTypeEnum;
    os: Os;
    policyMode?: NodeAddPolicyModeEnum;
    policyServerId?: string;
    properties: NodeAddProperties;
    state?: NodeAddStateEnum;
    status: NodeAddStatusEnum;
    timezone?: Timezone;
}
