package shared

type DeviceSummaryTypeEnum string

const (
	DeviceSummaryTypeEnumDefault                 DeviceSummaryTypeEnum = "DEFAULT"
	DeviceSummaryTypeEnumEsxHost                 DeviceSummaryTypeEnum = "ESX_HOST"
	DeviceSummaryTypeEnumVirtualMachine          DeviceSummaryTypeEnum = "VIRTUAL_MACHINE"
	DeviceSummaryTypeEnumVirtualCenter           DeviceSummaryTypeEnum = "VIRTUAL_CENTER"
	DeviceSummaryTypeEnumXenHost                 DeviceSummaryTypeEnum = "XEN_HOST"
	DeviceSummaryTypeEnumXenMasterServer         DeviceSummaryTypeEnum = "XEN_MASTER_SERVER"
	DeviceSummaryTypeEnumXenVirtualMachine       DeviceSummaryTypeEnum = "XEN_VIRTUAL_MACHINE"
	DeviceSummaryTypeEnumXenappController        DeviceSummaryTypeEnum = "XENAPP_CONTROLLER"
	DeviceSummaryTypeEnumXenappMachine           DeviceSummaryTypeEnum = "XENAPP_MACHINE"
	DeviceSummaryTypeEnumVblockEsx               DeviceSummaryTypeEnum = "VBLOCK_ESX"
	DeviceSummaryTypeEnumVblockVirtualMachine    DeviceSummaryTypeEnum = "VBLOCK_VIRTUAL_MACHINE"
	DeviceSummaryTypeEnumVblockSwitch            DeviceSummaryTypeEnum = "VBLOCK_SWITCH"
	DeviceSummaryTypeEnumVblockStorage           DeviceSummaryTypeEnum = "VBLOCK_STORAGE"
	DeviceSummaryTypeEnumVblockChassis           DeviceSummaryTypeEnum = "VBLOCK_CHASSIS"
	DeviceSummaryTypeEnumVblockBlade             DeviceSummaryTypeEnum = "VBLOCK_BLADE"
	DeviceSummaryTypeEnumVblockEnv               DeviceSummaryTypeEnum = "VBLOCK_ENV"
	DeviceSummaryTypeEnumAixBox                  DeviceSummaryTypeEnum = "AIX_BOX"
	DeviceSummaryTypeEnumAixHardPartition        DeviceSummaryTypeEnum = "AIX_HARD_PARTITION"
	DeviceSummaryTypeEnumAixPool                 DeviceSummaryTypeEnum = "AIX_POOL"
	DeviceSummaryTypeEnumAixLpar                 DeviceSummaryTypeEnum = "AIX_LPAR"
	DeviceSummaryTypeEnumAixWpar                 DeviceSummaryTypeEnum = "AIX_WPAR"
	DeviceSummaryTypeEnumSolSystem               DeviceSummaryTypeEnum = "SOL_SYSTEM"
	DeviceSummaryTypeEnumSolFrame                DeviceSummaryTypeEnum = "SOL_FRAME"
	DeviceSummaryTypeEnumSolZone                 DeviceSummaryTypeEnum = "SOL_ZONE"
	DeviceSummaryTypeEnumSolLdom                 DeviceSummaryTypeEnum = "SOL_LDOM"
	DeviceSummaryTypeEnumRedhatKvmHost           DeviceSummaryTypeEnum = "REDHAT_KVM_HOST"
	DeviceSummaryTypeEnumRedhatKvmGuestInstance  DeviceSummaryTypeEnum = "REDHAT_KVM_GUEST_INSTANCE"
	DeviceSummaryTypeEnumRedhatXenHost           DeviceSummaryTypeEnum = "REDHAT_XEN_HOST"
	DeviceSummaryTypeEnumRedhatVM                DeviceSummaryTypeEnum = "REDHAT_VM"
	DeviceSummaryTypeEnumHpSystem                DeviceSummaryTypeEnum = "HP_SYSTEM"
	DeviceSummaryTypeEnumHpNpar                  DeviceSummaryTypeEnum = "HP_NPAR"
	DeviceSummaryTypeEnumHpVpar                  DeviceSummaryTypeEnum = "HP_VPAR"
	DeviceSummaryTypeEnumHpIntVM                 DeviceSummaryTypeEnum = "HP_INT_VM"
	DeviceSummaryTypeEnumHpIntHost               DeviceSummaryTypeEnum = "HP_INT_HOST"
	DeviceSummaryTypeEnumMsHost                  DeviceSummaryTypeEnum = "MS_HOST"
	DeviceSummaryTypeEnumMsVM                    DeviceSummaryTypeEnum = "MS_VM"
	DeviceSummaryTypeEnumAzureVirtualmachine     DeviceSummaryTypeEnum = "AZURE_VIRTUALMACHINE"
	DeviceSummaryTypeEnumAmazonEc2               DeviceSummaryTypeEnum = "AMAZON_EC2"
	DeviceSummaryTypeEnumOs400Host               DeviceSummaryTypeEnum = "OS400_HOST"
	DeviceSummaryTypeEnumDockerHost              DeviceSummaryTypeEnum = "DOCKER_HOST"
	DeviceSummaryTypeEnumDockerNode              DeviceSummaryTypeEnum = "DOCKER_NODE"
	DeviceSummaryTypeEnumDockerContainer         DeviceSummaryTypeEnum = "DOCKER_CONTAINER"
	DeviceSummaryTypeEnumRouter                  DeviceSummaryTypeEnum = "ROUTER"
	DeviceSummaryTypeEnumHub                     DeviceSummaryTypeEnum = "HUB"
	DeviceSummaryTypeEnumPrinter                 DeviceSummaryTypeEnum = "PRINTER"
	DeviceSummaryTypeEnumRepeater                DeviceSummaryTypeEnum = "REPEATER"
	DeviceSummaryTypeEnumWorkstation             DeviceSummaryTypeEnum = "WORKSTATION"
	DeviceSummaryTypeEnumNtserver                DeviceSummaryTypeEnum = "NTSERVER"
	DeviceSummaryTypeEnumPrinetserver            DeviceSummaryTypeEnum = "PRINETSERVER"
	DeviceSummaryTypeEnumRmonprobe               DeviceSummaryTypeEnum = "RMONPROBE"
	DeviceSummaryTypeEnumWebserver               DeviceSummaryTypeEnum = "WEBSERVER"
	DeviceSummaryTypeEnumDbserver                DeviceSummaryTypeEnum = "DBSERVER"
	DeviceSummaryTypeEnumMailserver              DeviceSummaryTypeEnum = "MAILSERVER"
	DeviceSummaryTypeEnumFirewall                DeviceSummaryTypeEnum = "FIREWALL"
	DeviceSummaryTypeEnumOthers                  DeviceSummaryTypeEnum = "OTHERS"
	DeviceSummaryTypeEnumAppserver               DeviceSummaryTypeEnum = "APPSERVER"
	DeviceSummaryTypeEnumDedicatedagent          DeviceSummaryTypeEnum = "DEDICATEDAGENT"
	DeviceSummaryTypeEnumRemoteagent             DeviceSummaryTypeEnum = "REMOTEAGENT"
	DeviceSummaryTypeEnumLayer3Switch            DeviceSummaryTypeEnum = "LAYER_3_SWITCH"
	DeviceSummaryTypeEnumCentralOfficeSwitch     DeviceSummaryTypeEnum = "CENTRAL_OFFICE_SWITCH"
	DeviceSummaryTypeEnumAccessServer            DeviceSummaryTypeEnum = "ACCESS_SERVER"
	DeviceSummaryTypeEnumIo                      DeviceSummaryTypeEnum = "I_O"
	DeviceSummaryTypeEnumWebCaching              DeviceSummaryTypeEnum = "WEB_CACHING"
	DeviceSummaryTypeEnumManagement              DeviceSummaryTypeEnum = "MANAGEMENT"
	DeviceSummaryTypeEnumBlockServer             DeviceSummaryTypeEnum = "BLOCK_SERVER"
	DeviceSummaryTypeEnumFileServer              DeviceSummaryTypeEnum = "FILE_SERVER"
	DeviceSummaryTypeEnumMobileUserDevice        DeviceSummaryTypeEnum = "MOBILE_USER_DEVICE"
	DeviceSummaryTypeEnumBridgeOrExtender        DeviceSummaryTypeEnum = "BRIDGE_OR_EXTENDER"
	DeviceSummaryTypeEnumGateway                 DeviceSummaryTypeEnum = "GATEWAY"
	DeviceSummaryTypeEnumLoadbalancer            DeviceSummaryTypeEnum = "LOADBALANCER"
	DeviceSummaryTypeEnumMainframe               DeviceSummaryTypeEnum = "MAINFRAME"
	DeviceSummaryTypeEnumSanswitch               DeviceSummaryTypeEnum = "SANSWITCH"
	DeviceSummaryTypeEnumSanhub                  DeviceSummaryTypeEnum = "SANHUB"
	DeviceSummaryTypeEnumSanbridge               DeviceSummaryTypeEnum = "SANBRIDGE"
	DeviceSummaryTypeEnumSanrouter               DeviceSummaryTypeEnum = "SANROUTER"
	DeviceSummaryTypeEnumSandirector             DeviceSummaryTypeEnum = "SANDIRECTOR"
	DeviceSummaryTypeEnumRaidstoragedevice       DeviceSummaryTypeEnum = "RAIDSTORAGEDEVICE"
	DeviceSummaryTypeEnumVirtualTapeLibrary      DeviceSummaryTypeEnum = "VIRTUAL_TAPE_LIBRARY"
	DeviceSummaryTypeEnumJbod                    DeviceSummaryTypeEnum = "JBOD"
	DeviceSummaryTypeEnumStoragesubsystem        DeviceSummaryTypeEnum = "STORAGESUBSYSTEM"
	DeviceSummaryTypeEnumStorageVirtualizer      DeviceSummaryTypeEnum = "STORAGE_VIRTUALIZER"
	DeviceSummaryTypeEnumMediaLibrary            DeviceSummaryTypeEnum = "MEDIA_LIBRARY"
	DeviceSummaryTypeEnumExtendernode            DeviceSummaryTypeEnum = "EXTENDERNODE"
	DeviceSummaryTypeEnumNasHead                 DeviceSummaryTypeEnum = "NAS_HEAD"
	DeviceSummaryTypeEnumSelfcontainedNas        DeviceSummaryTypeEnum = "SELFCONTAINED_NAS"
	DeviceSummaryTypeEnumUps                     DeviceSummaryTypeEnum = "UPS"
	DeviceSummaryTypeEnumIPPhone                 DeviceSummaryTypeEnum = "IP_PHONE"
	DeviceSummaryTypeEnumManagementController    DeviceSummaryTypeEnum = "MANAGEMENT_CONTROLLER"
	DeviceSummaryTypeEnumChassisManager          DeviceSummaryTypeEnum = "CHASSIS_MANAGER"
	DeviceSummaryTypeEnumHostbasedRaidController DeviceSummaryTypeEnum = "HOSTBASED_RAID_CONTROLLER"
	DeviceSummaryTypeEnumStorageDeviceEnclosure  DeviceSummaryTypeEnum = "STORAGE_DEVICE_ENCLOSURE"
	DeviceSummaryTypeEnumDesktop                 DeviceSummaryTypeEnum = "DESKTOP"
	DeviceSummaryTypeEnumLaptop                  DeviceSummaryTypeEnum = "LAPTOP"
	DeviceSummaryTypeEnumVirtualLibrarySystem    DeviceSummaryTypeEnum = "VIRTUAL_LIBRARY_SYSTEM"
	DeviceSummaryTypeEnumBladeSystem             DeviceSummaryTypeEnum = "BLADE_SYSTEM"
	DeviceSummaryTypeEnumBladeServer             DeviceSummaryTypeEnum = "BLADE_SERVER"
	DeviceSummaryTypeEnumVpnConcentrator         DeviceSummaryTypeEnum = "VPN_CONCENTRATOR"
	DeviceSummaryTypeEnumProxyServer             DeviceSummaryTypeEnum = "PROXY_SERVER"
	DeviceSummaryTypeEnumLayer3ProxyServer       DeviceSummaryTypeEnum = "LAYER_3_PROXY_SERVER"
	DeviceSummaryTypeEnumWanAccelerator          DeviceSummaryTypeEnum = "WAN_ACCELERATOR"
	DeviceSummaryTypeEnumSanProcessor            DeviceSummaryTypeEnum = "SAN_PROCESSOR"
	DeviceSummaryTypeEnumVirtualServerRhl        DeviceSummaryTypeEnum = "VIRTUAL_SERVER_RHL"
	DeviceSummaryTypeEnumVirtualServerWindows    DeviceSummaryTypeEnum = "VIRTUAL_SERVER_WINDOWS"
	DeviceSummaryTypeEnumEsXi                    DeviceSummaryTypeEnum = "ESXi"
	DeviceSummaryTypeEnumVirtualServer           DeviceSummaryTypeEnum = "VIRTUAL_SERVER"
	DeviceSummaryTypeEnumHypervisor              DeviceSummaryTypeEnum = "HYPERVISOR"
	DeviceSummaryTypeEnumAwsAmi                  DeviceSummaryTypeEnum = "AWS_AMI"
	DeviceSummaryTypeEnumMsAzure                 DeviceSummaryTypeEnum = "MS_AZURE"
	DeviceSummaryTypeEnumUnknown                 DeviceSummaryTypeEnum = "UNKNOWN"
)

type DeviceSummary struct {
	AgentID              *int32
	AgentName            *string
	AmbientTemperature   *float64
	CollectTime          *string
	DeviceTsmoKey        *string
	DeviceURL            *string
	HeatingMargin        *float64
	HeatingMarginUnit    *string
	ID                   *int32
	Name                 *string
	PowerConsumption     *float64
	PowerConsumptionUnit *string
	ProductVersion       *string
	ServerID             *int32
	ServerName           *string
	Sid                  *string
	Type                 *DeviceSummaryTypeEnum
	UpdateTimestamp      *int64
}
