package shared

type NodeAddMachineTypeEnum string

const (
	NodeAddMachineTypeEnumVmware      NodeAddMachineTypeEnum = "vmware"
	NodeAddMachineTypeEnumPhysical    NodeAddMachineTypeEnum = "physical"
	NodeAddMachineTypeEnumVM          NodeAddMachineTypeEnum = "vm"
	NodeAddMachineTypeEnumSolariszone NodeAddMachineTypeEnum = "solariszone"
	NodeAddMachineTypeEnumQemu        NodeAddMachineTypeEnum = "qemu"
	NodeAddMachineTypeEnumXen         NodeAddMachineTypeEnum = "xen"
	NodeAddMachineTypeEnumAixlpar     NodeAddMachineTypeEnum = "aixlpar"
	NodeAddMachineTypeEnumHyperv      NodeAddMachineTypeEnum = "hyperv"
	NodeAddMachineTypeEnumBsdjail     NodeAddMachineTypeEnum = "bsdjail"
)

type NodeAddPolicyModeEnum string

const (
	NodeAddPolicyModeEnumEnforce NodeAddPolicyModeEnum = "enforce"
	NodeAddPolicyModeEnumAudit   NodeAddPolicyModeEnum = "audit"
)

type NodeAddPropertiesTagsEnum string

const (
	NodeAddPropertiesTagsEnumSome NodeAddPropertiesTagsEnum = "some"
	NodeAddPropertiesTagsEnumTags NodeAddPropertiesTagsEnum = "tags"
)

type NodeAddPropertiesVars struct {
	Var1  *string `json:"var1"`
	Vars2 *string `json:"vars2"`
}

type NodeAddProperties struct {
	Env  *string                     `json:"env"`
	Tags []NodeAddPropertiesTagsEnum `json:"tags"`
	Vars *NodeAddPropertiesVars      `json:"vars"`
}

type NodeAddStateEnum string

const (
	NodeAddStateEnumEnable        NodeAddStateEnum = "enable"
	NodeAddStateEnumIgnored       NodeAddStateEnum = "ignored"
	NodeAddStateEnumEmptyPolicies NodeAddStateEnum = "empty-policies"
	NodeAddStateEnumInitializing  NodeAddStateEnum = "initializing"
	NodeAddStateEnumPreparingEol  NodeAddStateEnum = "preparing-eol"
)

type NodeAddStatusEnum string

const (
	NodeAddStatusEnumAccepted NodeAddStatusEnum = "accepted"
	NodeAddStatusEnumPending  NodeAddStatusEnum = "pending"
)

type NodeAdd struct {
	AgentKey       *AgentKey              `json:"agentKey"`
	Hostname       string                 `json:"hostname"`
	ID             string                 `json:"id"`
	IPAddresses    []string               `json:"ipAddresses"`
	MachineType    NodeAddMachineTypeEnum `json:"machineType"`
	Os             Os                     `json:"os"`
	PolicyMode     *NodeAddPolicyModeEnum `json:"policyMode"`
	PolicyServerID *string                `json:"policyServerId"`
	Properties     NodeAddProperties      `json:"properties"`
	State          *NodeAddStateEnum      `json:"state"`
	Status         NodeAddStatusEnum      `json:"status"`
	Timezone       *Timezone              `json:"timezone"`
}
