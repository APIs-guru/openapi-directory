package shared

import (
	"time"
)

// NodeFullBios
// BIOS information
type NodeFullBios struct {
	Description *string `json:"description,omitempty"`
	Editor      *string `json:"editor,omitempty"`
	Name        *string `json:"name,omitempty"`
	Quantity    *int64  `json:"quantity,omitempty"`
	ReleaseDate *string `json:"releaseDate,omitempty"`
	Version     *string `json:"version,omitempty"`
}

type NodeFullControllers struct {
	Description  *string `json:"description,omitempty"`
	Manufacturer *string `json:"manufacturer,omitempty"`
	Name         *string `json:"name,omitempty"`
	Quantity     *int64  `json:"quantity,omitempty"`
	Type         *string `json:"type,omitempty"`
}

type NodeFullEnvironmentVariables struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type NodeFullFileSystems struct {
	Description *string `json:"description,omitempty"`
	FileCount   *int64  `json:"fileCount,omitempty"`
	FreeSpace   *int64  `json:"freeSpace,omitempty"`
	MountPoint  *string `json:"mountPoint,omitempty"`
	Name        *string `json:"name,omitempty"`
	TotalSpace  *int64  `json:"totalSpace,omitempty"`
}

type NodeFullMachineTypeEnum string

const (
	NodeFullMachineTypeEnumPhysical NodeFullMachineTypeEnum = "Physical"
	NodeFullMachineTypeEnumVirtual  NodeFullMachineTypeEnum = "Virtual"
)

// NodeFullMachine
// Information about the underlying machine
type NodeFullMachine struct {
	ID           *string                  `json:"id,omitempty"`
	Manufacturer *string                  `json:"manufacturer,omitempty"`
	Provider     *string                  `json:"provider,omitempty"`
	SerialNumber *string                  `json:"serialNumber,omitempty"`
	Type         *NodeFullMachineTypeEnum `json:"type,omitempty"`
}

type NodeFullManagementTechnology struct {
	Capabilities   []string `json:"capabilities,omitempty"`
	Name           string   `json:"name"`
	NodeKind       *string  `json:"nodeKind,omitempty"`
	RootComponents []string `json:"rootComponents,omitempty"`
	Version        *string  `json:"version,omitempty"`
}

// NodeFullManagementTechnologyDetails
// Additional information about management technology
type NodeFullManagementTechnologyDetails struct {
	CfengineKeys []string `json:"cfengineKeys,omitempty"`
	CfengineUser *string  `json:"cfengineUser,omitempty"`
}

// NodeFullMemories
// Memory slots
type NodeFullMemories struct {
	Capacity     *int64  `json:"capacity,omitempty"`
	Caption      *string `json:"caption,omitempty"`
	Description  *string `json:"description,omitempty"`
	Name         *string `json:"name,omitempty"`
	Quantity     *string `json:"quantity,omitempty"`
	SerialNumber *string `json:"serialNumber,omitempty"`
	SlotNumber   *int64  `json:"slotNumber,omitempty"`
	Speed        *int64  `json:"speed,omitempty"`
	Type         *string `json:"type,omitempty"`
}

type NodeFullNetworkInterfaces struct {
	DhcpServer  *string  `json:"dhcpServer,omitempty"`
	IPAddresses []string `json:"ipAddresses,omitempty"`
	MacAddress  *string  `json:"macAddress,omitempty"`
	Mask        []string `json:"mask,omitempty"`
	Name        *string  `json:"name,omitempty"`
	Speed       *string  `json:"speed,omitempty"`
	Status      *string  `json:"status,omitempty"`
	Type        *string  `json:"type,omitempty"`
}

type NodeFullOsTypeEnum string

const (
	NodeFullOsTypeEnumWindows NodeFullOsTypeEnum = "Windows"
	NodeFullOsTypeEnumLinux   NodeFullOsTypeEnum = "Linux"
	NodeFullOsTypeEnumAix     NodeFullOsTypeEnum = "AIX"
	NodeFullOsTypeEnumFreeBsd NodeFullOsTypeEnum = "FreeBSD"
)

// NodeFullOs
// Information about the operating system
type NodeFullOs struct {
	FullName      string             `json:"fullName"`
	KernelVersion string             `json:"kernelVersion"`
	Name          string             `json:"name"`
	ServicePack   *string            `json:"servicePack,omitempty"`
	Type          NodeFullOsTypeEnum `json:"type"`
	Version       string             `json:"version"`
}

type NodeFullPolicyModeEnum string

const (
	NodeFullPolicyModeEnumEnforce NodeFullPolicyModeEnum = "enforce"
	NodeFullPolicyModeEnumAudit   NodeFullPolicyModeEnum = "audit"
	NodeFullPolicyModeEnumDefault NodeFullPolicyModeEnum = "default"
)

type NodeFullPorts struct {
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
	Quantity    *int64  `json:"quantity,omitempty"`
	Type        *string `json:"type,omitempty"`
}

// NodeFullProcesses
// Process information
type NodeFullProcesses struct {
	CPUUsage      *int64     `json:"cpuUsage,omitempty"`
	Description   *string    `json:"description,omitempty"`
	Memory        *float32   `json:"memory,omitempty"`
	Name          *string    `json:"name,omitempty"`
	Pid           *int64     `json:"pid,omitempty"`
	Started       *time.Time `json:"started,omitempty"`
	Tty           *string    `json:"tty,omitempty"`
	User          *string    `json:"user,omitempty"`
	VirtualMemory *int64     `json:"virtualMemory,omitempty"`
}

type NodeFullProcessors struct {
	Arch          *string `json:"arch,omitempty"`
	Core          *int64  `json:"core,omitempty"`
	Cpuid         *string `json:"cpuid,omitempty"`
	Description   *string `json:"description,omitempty"`
	ExternalClock *string `json:"externalClock,omitempty"`
	FamilyName    *string `json:"familyName,omitempty"`
	Manufacturer  *string `json:"manufacturer,omitempty"`
	Model         *int64  `json:"model,omitempty"`
	Name          *string `json:"name,omitempty"`
	Quantity      *int64  `json:"quantity,omitempty"`
	Speed         *int64  `json:"speed,omitempty"`
	Stepping      *int64  `json:"stepping,omitempty"`
	Thread        *int64  `json:"thread,omitempty"`
}

type NodeFullProperties struct {
	Name  string      `json:"name"`
	Value interface{} `json:"value"`
}

type NodeFullSlots struct {
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
	Quantity    *int64  `json:"quantity,omitempty"`
	Status      *string `json:"status,omitempty"`
}

// NodeFullSoftwareLicense
// Information about the license
type NodeFullSoftwareLicense struct {
	Description    *string    `json:"description,omitempty"`
	ExpirationDate *time.Time `json:"expirationDate,omitempty"`
	Name           *string    `json:"name,omitempty"`
	Oem            *string    `json:"oem,omitempty"`
	ProductID      *string    `json:"productId,omitempty"`
	ProductKey     *string    `json:"productKey,omitempty"`
}

type NodeFullSoftware struct {
	Description *string                  `json:"description,omitempty"`
	Editor      *string                  `json:"editor,omitempty"`
	License     *NodeFullSoftwareLicense `json:"license,omitempty"`
	Name        *string                  `json:"name,omitempty"`
	ReleaseDate *time.Time               `json:"releaseDate,omitempty"`
	Version     *string                  `json:"version,omitempty"`
}

type NodeFullSound struct {
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
	Quantity    *int64  `json:"quantity,omitempty"`
}

type NodeFullStatusEnum string

const (
	NodeFullStatusEnumPending  NodeFullStatusEnum = "pending"
	NodeFullStatusEnumAccepted NodeFullStatusEnum = "accepted"
	NodeFullStatusEnumDeleted  NodeFullStatusEnum = "deleted"
)

type NodeFullStorage struct {
	Description  *string `json:"description,omitempty"`
	Firmware     *string `json:"firmware,omitempty"`
	Manufacturer *string `json:"manufacturer,omitempty"`
	Model        *string `json:"model,omitempty"`
	Name         *string `json:"name,omitempty"`
	Quantity     *int64  `json:"quantity,omitempty"`
	SerialNumber *string `json:"serialNumber,omitempty"`
	Size         *int64  `json:"size,omitempty"`
	Type         *string `json:"type,omitempty"`
}

type NodeFullTimezone struct {
	Name   string  `json:"name"`
	Offset *string `json:"offset,omitempty"`
}

type NodeFullVideos struct {
	Chipset     *string `json:"chipset,omitempty"`
	Description *string `json:"description,omitempty"`
	Memory      *string `json:"memory,omitempty"`
	Name        *string `json:"name,omitempty"`
	Quantity    *int64  `json:"quantity,omitempty"`
	Resolution  *string `json:"resolution,omitempty"`
}

type NodeFullVirtualMachines struct {
	Description *string `json:"description,omitempty"`
	Memory      *string `json:"memory,omitempty"`
	Name        *string `json:"name,omitempty"`
	Owner       *string `json:"owner,omitempty"`
	Status      *string `json:"status,omitempty"`
	Subsystem   *string `json:"subsystem,omitempty"`
	Type        *string `json:"type,omitempty"`
	UUID        *string `json:"uuid,omitempty"`
	Vcpu        *string `json:"vcpu,omitempty"`
}

type NodeFull struct {
	Accounts                    []string                             `json:"accounts,omitempty"`
	ArchitectureDescription     *string                              `json:"architectureDescription,omitempty"`
	Bios                        *NodeFullBios                        `json:"bios,omitempty"`
	Controllers                 []NodeFullControllers                `json:"controllers,omitempty"`
	Description                 *string                              `json:"description,omitempty"`
	EnvironmentVariables        []NodeFullEnvironmentVariables       `json:"environmentVariables,omitempty"`
	FileSystems                 []NodeFullFileSystems                `json:"fileSystems,omitempty"`
	Hostname                    string                               `json:"hostname"`
	ID                          string                               `json:"id"`
	IPAddresses                 []string                             `json:"ipAddresses"`
	LastInventoryDate           *time.Time                           `json:"lastInventoryDate,omitempty"`
	LastRunDate                 *time.Time                           `json:"lastRunDate,omitempty"`
	Machine                     *NodeFullMachine                     `json:"machine,omitempty"`
	ManagementTechnology        []NodeFullManagementTechnology       `json:"managementTechnology"`
	ManagementTechnologyDetails *NodeFullManagementTechnologyDetails `json:"managementTechnologyDetails,omitempty"`
	Memories                    []NodeFullMemories                   `json:"memories,omitempty"`
	NetworkInterfaces           []NodeFullNetworkInterfaces          `json:"networkInterfaces,omitempty"`
	Os                          *NodeFullOs                          `json:"os,omitempty"`
	PolicyMode                  *NodeFullPolicyModeEnum              `json:"policyMode,omitempty"`
	PolicyServerID              string                               `json:"policyServerId"`
	Ports                       []NodeFullPorts                      `json:"ports,omitempty"`
	Processes                   []NodeFullProcesses                  `json:"processes,omitempty"`
	Processors                  []NodeFullProcessors                 `json:"processors,omitempty"`
	Properties                  []NodeFullProperties                 `json:"properties"`
	RAM                         *int64                               `json:"ram,omitempty"`
	Slots                       []NodeFullSlots                      `json:"slots,omitempty"`
	Software                    []NodeFullSoftware                   `json:"software,omitempty"`
	Sound                       []NodeFullSound                      `json:"sound,omitempty"`
	Status                      NodeFullStatusEnum                   `json:"status"`
	Storage                     []NodeFullStorage                    `json:"storage,omitempty"`
	Timezone                    *NodeFullTimezone                    `json:"timezone,omitempty"`
	Videos                      []NodeFullVideos                     `json:"videos,omitempty"`
	VirtualMachines             []NodeFullVirtualMachines            `json:"virtualMachines,omitempty"`
}
