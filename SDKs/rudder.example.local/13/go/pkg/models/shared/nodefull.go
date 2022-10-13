package shared

import (
	"time"
)

type NodeFullBios struct {
	Description *string `json:"description"`
	Editor      *string `json:"editor"`
	Name        *string `json:"name"`
	Quantity    *int64  `json:"quantity"`
	ReleaseDate *string `json:"releaseDate"`
	Version     *string `json:"version"`
}

type NodeFullControllers struct {
	Description  *string `json:"description"`
	Manufacturer *string `json:"manufacturer"`
	Name         *string `json:"name"`
	Quantity     *int64  `json:"quantity"`
	Type         *string `json:"type"`
}

type NodeFullEnvironmentVariables struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type NodeFullFileSystems struct {
	Description *string `json:"description"`
	FileCount   *int64  `json:"fileCount"`
	FreeSpace   *int64  `json:"freeSpace"`
	MountPoint  *string `json:"mountPoint"`
	Name        *string `json:"name"`
	TotalSpace  *int64  `json:"totalSpace"`
}

type NodeFullMachineTypeEnum string

const (
	NodeFullMachineTypeEnumPhysical NodeFullMachineTypeEnum = "Physical"
	NodeFullMachineTypeEnumVirtual  NodeFullMachineTypeEnum = "Virtual"
)

type NodeFullMachine struct {
	ID           *string                  `json:"id"`
	Manufacturer *string                  `json:"manufacturer"`
	Provider     *string                  `json:"provider"`
	SerialNumber *string                  `json:"serialNumber"`
	Type         *NodeFullMachineTypeEnum `json:"type"`
}

type NodeFullManagementTechnology struct {
	Capabilities   []string `json:"capabilities"`
	Name           string   `json:"name"`
	NodeKind       *string  `json:"nodeKind"`
	RootComponents []string `json:"rootComponents"`
	Version        *string  `json:"version"`
}

type NodeFullManagementTechnologyDetails struct {
	CfengineKeys []string `json:"cfengineKeys"`
	CfengineUser *string  `json:"cfengineUser"`
}

type NodeFullMemories struct {
	Capacity     *int64  `json:"capacity"`
	Caption      *string `json:"caption"`
	Description  *string `json:"description"`
	Name         *string `json:"name"`
	Quantity     *string `json:"quantity"`
	SerialNumber *string `json:"serialNumber"`
	SlotNumber   *int64  `json:"slotNumber"`
	Speed        *int64  `json:"speed"`
	Type         *string `json:"type"`
}

type NodeFullNetworkInterfaces struct {
	DhcpServer  *string  `json:"dhcpServer"`
	IPAddresses []string `json:"ipAddresses"`
	MacAddress  *string  `json:"macAddress"`
	Mask        []string `json:"mask"`
	Name        *string  `json:"name"`
	Speed       *string  `json:"speed"`
	Status      *string  `json:"status"`
	Type        *string  `json:"type"`
}

type NodeFullOsTypeEnum string

const (
	NodeFullOsTypeEnumWindows NodeFullOsTypeEnum = "Windows"
	NodeFullOsTypeEnumLinux   NodeFullOsTypeEnum = "Linux"
	NodeFullOsTypeEnumAix     NodeFullOsTypeEnum = "AIX"
	NodeFullOsTypeEnumFreeBsd NodeFullOsTypeEnum = "FreeBSD"
)

type NodeFullOs struct {
	FullName      string             `json:"fullName"`
	KernelVersion string             `json:"kernelVersion"`
	Name          string             `json:"name"`
	ServicePack   *string            `json:"servicePack"`
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
	Description *string `json:"description"`
	Name        *string `json:"name"`
	Quantity    *int64  `json:"quantity"`
	Type        *string `json:"type"`
}

type NodeFullProcesses struct {
	CPUUsage      *int64     `json:"cpuUsage"`
	Description   *string    `json:"description"`
	Memory        *float32   `json:"memory"`
	Name          *string    `json:"name"`
	Pid           *int64     `json:"pid"`
	Started       *time.Time `json:"started"`
	Tty           *string    `json:"tty"`
	User          *string    `json:"user"`
	VirtualMemory *int64     `json:"virtualMemory"`
}

type NodeFullProcessors struct {
	Arch          *string `json:"arch"`
	Core          *int64  `json:"core"`
	Cpuid         *string `json:"cpuid"`
	Description   *string `json:"description"`
	ExternalClock *string `json:"externalClock"`
	FamilyName    *string `json:"familyName"`
	Manufacturer  *string `json:"manufacturer"`
	Model         *int64  `json:"model"`
	Name          *string `json:"name"`
	Quantity      *int64  `json:"quantity"`
	Speed         *int64  `json:"speed"`
	Stepping      *int64  `json:"stepping"`
	Thread        *int64  `json:"thread"`
}

type NodeFullProperties struct {
	Name  string      `json:"name"`
	Value interface{} `json:"value"`
}

type NodeFullSlots struct {
	Description *string `json:"description"`
	Name        *string `json:"name"`
	Quantity    *int64  `json:"quantity"`
	Status      *string `json:"status"`
}

type NodeFullSoftwareLicense struct {
	Description    *string    `json:"description"`
	ExpirationDate *time.Time `json:"expirationDate"`
	Name           *string    `json:"name"`
	Oem            *string    `json:"oem"`
	ProductID      *string    `json:"productId"`
	ProductKey     *string    `json:"productKey"`
}

type NodeFullSoftware struct {
	Description *string                  `json:"description"`
	Editor      *string                  `json:"editor"`
	License     *NodeFullSoftwareLicense `json:"license"`
	Name        *string                  `json:"name"`
	ReleaseDate *time.Time               `json:"releaseDate"`
	Version     *string                  `json:"version"`
}

type NodeFullSound struct {
	Description *string `json:"description"`
	Name        *string `json:"name"`
	Quantity    *int64  `json:"quantity"`
}

type NodeFullStatusEnum string

const (
	NodeFullStatusEnumPending  NodeFullStatusEnum = "pending"
	NodeFullStatusEnumAccepted NodeFullStatusEnum = "accepted"
	NodeFullStatusEnumDeleted  NodeFullStatusEnum = "deleted"
)

type NodeFullStorage struct {
	Description  *string `json:"description"`
	Firmware     *string `json:"firmware"`
	Manufacturer *string `json:"manufacturer"`
	Model        *string `json:"model"`
	Name         *string `json:"name"`
	Quantity     *int64  `json:"quantity"`
	SerialNumber *string `json:"serialNumber"`
	Size         *int64  `json:"size"`
	Type         *string `json:"type"`
}

type NodeFullTimezone struct {
	Name   string  `json:"name"`
	Offset *string `json:"offset"`
}

type NodeFullVideos struct {
	Chipset     *string `json:"chipset"`
	Description *string `json:"description"`
	Memory      *string `json:"memory"`
	Name        *string `json:"name"`
	Quantity    *int64  `json:"quantity"`
	Resolution  *string `json:"resolution"`
}

type NodeFullVirtualMachines struct {
	Description *string `json:"description"`
	Memory      *string `json:"memory"`
	Name        *string `json:"name"`
	Owner       *string `json:"owner"`
	Status      *string `json:"status"`
	Subsystem   *string `json:"subsystem"`
	Type        *string `json:"type"`
	UUID        *string `json:"uuid"`
	Vcpu        *string `json:"vcpu"`
}

type NodeFull struct {
	Accounts                    []string                             `json:"accounts"`
	ArchitectureDescription     *string                              `json:"architectureDescription"`
	Bios                        *NodeFullBios                        `json:"bios"`
	Controllers                 []NodeFullControllers                `json:"controllers"`
	Description                 *string                              `json:"description"`
	EnvironmentVariables        []NodeFullEnvironmentVariables       `json:"environmentVariables"`
	FileSystems                 []NodeFullFileSystems                `json:"fileSystems"`
	Hostname                    string                               `json:"hostname"`
	ID                          string                               `json:"id"`
	IPAddresses                 []string                             `json:"ipAddresses"`
	LastInventoryDate           *time.Time                           `json:"lastInventoryDate"`
	LastRunDate                 *time.Time                           `json:"lastRunDate"`
	Machine                     *NodeFullMachine                     `json:"machine"`
	ManagementTechnology        []NodeFullManagementTechnology       `json:"managementTechnology"`
	ManagementTechnologyDetails *NodeFullManagementTechnologyDetails `json:"managementTechnologyDetails"`
	Memories                    []NodeFullMemories                   `json:"memories"`
	NetworkInterfaces           []NodeFullNetworkInterfaces          `json:"networkInterfaces"`
	Os                          *NodeFullOs                          `json:"os"`
	PolicyMode                  *NodeFullPolicyModeEnum              `json:"policyMode"`
	PolicyServerID              string                               `json:"policyServerId"`
	Ports                       []NodeFullPorts                      `json:"ports"`
	Processes                   []NodeFullProcesses                  `json:"processes"`
	Processors                  []NodeFullProcessors                 `json:"processors"`
	Properties                  []NodeFullProperties                 `json:"properties"`
	RAM                         *int64                               `json:"ram"`
	Slots                       []NodeFullSlots                      `json:"slots"`
	Software                    []NodeFullSoftware                   `json:"software"`
	Sound                       []NodeFullSound                      `json:"sound"`
	Status                      NodeFullStatusEnum                   `json:"status"`
	Storage                     []NodeFullStorage                    `json:"storage"`
	Timezone                    *NodeFullTimezone                    `json:"timezone"`
	Videos                      []NodeFullVideos                     `json:"videos"`
	VirtualMachines             []NodeFullVirtualMachines            `json:"virtualMachines"`
}
