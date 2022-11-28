from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class DeviceSummaryTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    ESX_HOST = "ESX_HOST"
    VIRTUAL_MACHINE = "VIRTUAL_MACHINE"
    VIRTUAL_CENTER = "VIRTUAL_CENTER"
    XEN_HOST = "XEN_HOST"
    XEN_MASTER_SERVER = "XEN_MASTER_SERVER"
    XEN_VIRTUAL_MACHINE = "XEN_VIRTUAL_MACHINE"
    XENAPP_CONTROLLER = "XENAPP_CONTROLLER"
    XENAPP_MACHINE = "XENAPP_MACHINE"
    VBLOCK_ESX = "VBLOCK_ESX"
    VBLOCK_VIRTUAL_MACHINE = "VBLOCK_VIRTUAL_MACHINE"
    VBLOCK_SWITCH = "VBLOCK_SWITCH"
    VBLOCK_STORAGE = "VBLOCK_STORAGE"
    VBLOCK_CHASSIS = "VBLOCK_CHASSIS"
    VBLOCK_BLADE = "VBLOCK_BLADE"
    VBLOCK_ENV = "VBLOCK_ENV"
    AIX_BOX = "AIX_BOX"
    AIX_HARD_PARTITION = "AIX_HARD_PARTITION"
    AIX_POOL = "AIX_POOL"
    AIX_LPAR = "AIX_LPAR"
    AIX_WPAR = "AIX_WPAR"
    SOL_SYSTEM = "SOL_SYSTEM"
    SOL_FRAME = "SOL_FRAME"
    SOL_ZONE = "SOL_ZONE"
    SOL_LDOM = "SOL_LDOM"
    REDHAT_KVM_HOST = "REDHAT_KVM_HOST"
    REDHAT_KVM_GUEST_INSTANCE = "REDHAT_KVM_GUEST_INSTANCE"
    REDHAT_XEN_HOST = "REDHAT_XEN_HOST"
    REDHAT_VM = "REDHAT_VM"
    HP_SYSTEM = "HP_SYSTEM"
    HP_NPAR = "HP_NPAR"
    HP_VPAR = "HP_VPAR"
    HP_INT_VM = "HP_INT_VM"
    HP_INT_HOST = "HP_INT_HOST"
    MS_HOST = "MS_HOST"
    MS_VM = "MS_VM"
    AZURE_VIRTUALMACHINE = "AZURE_VIRTUALMACHINE"
    AMAZON_EC2 = "AMAZON_EC2"
    OS400_HOST = "OS400_HOST"
    DOCKER_HOST = "DOCKER_HOST"
    DOCKER_NODE = "DOCKER_NODE"
    DOCKER_CONTAINER = "DOCKER_CONTAINER"
    ROUTER = "ROUTER"
    HUB = "HUB"
    PRINTER = "PRINTER"
    REPEATER = "REPEATER"
    WORKSTATION = "WORKSTATION"
    NTSERVER = "NTSERVER"
    PRINETSERVER = "PRINETSERVER"
    RMONPROBE = "RMONPROBE"
    WEBSERVER = "WEBSERVER"
    DBSERVER = "DBSERVER"
    MAILSERVER = "MAILSERVER"
    FIREWALL = "FIREWALL"
    OTHERS = "OTHERS"
    APPSERVER = "APPSERVER"
    DEDICATEDAGENT = "DEDICATEDAGENT"
    REMOTEAGENT = "REMOTEAGENT"
    LAYER_3_SWITCH = "LAYER_3_SWITCH"
    CENTRAL_OFFICE_SWITCH = "CENTRAL_OFFICE_SWITCH"
    ACCESS_SERVER = "ACCESS_SERVER"
    I_O = "I_O"
    WEB_CACHING = "WEB_CACHING"
    MANAGEMENT = "MANAGEMENT"
    BLOCK_SERVER = "BLOCK_SERVER"
    FILE_SERVER = "FILE_SERVER"
    MOBILE_USER_DEVICE = "MOBILE_USER_DEVICE"
    BRIDGE_OR_EXTENDER = "BRIDGE_OR_EXTENDER"
    GATEWAY = "GATEWAY"
    LOADBALANCER = "LOADBALANCER"
    MAINFRAME = "MAINFRAME"
    SANSWITCH = "SANSWITCH"
    SANHUB = "SANHUB"
    SANBRIDGE = "SANBRIDGE"
    SANROUTER = "SANROUTER"
    SANDIRECTOR = "SANDIRECTOR"
    RAIDSTORAGEDEVICE = "RAIDSTORAGEDEVICE"
    VIRTUAL_TAPE_LIBRARY = "VIRTUAL_TAPE_LIBRARY"
    JBOD = "JBOD"
    STORAGESUBSYSTEM = "STORAGESUBSYSTEM"
    STORAGE_VIRTUALIZER = "STORAGE_VIRTUALIZER"
    MEDIA_LIBRARY = "MEDIA_LIBRARY"
    EXTENDERNODE = "EXTENDERNODE"
    NAS_HEAD = "NAS_HEAD"
    SELFCONTAINED_NAS = "SELFCONTAINED_NAS"
    UPS = "UPS"
    IP_PHONE = "IP_PHONE"
    MANAGEMENT_CONTROLLER = "MANAGEMENT_CONTROLLER"
    CHASSIS_MANAGER = "CHASSIS_MANAGER"
    HOSTBASED_RAID_CONTROLLER = "HOSTBASED_RAID_CONTROLLER"
    STORAGE_DEVICE_ENCLOSURE = "STORAGE_DEVICE_ENCLOSURE"
    DESKTOP = "DESKTOP"
    LAPTOP = "LAPTOP"
    VIRTUAL_LIBRARY_SYSTEM = "VIRTUAL_LIBRARY_SYSTEM"
    BLADE_SYSTEM = "BLADE_SYSTEM"
    BLADE_SERVER = "BLADE_SERVER"
    VPN_CONCENTRATOR = "VPN_CONCENTRATOR"
    PROXY_SERVER = "PROXY_SERVER"
    LAYER_3_PROXY_SERVER = "LAYER_3_PROXY_SERVER"
    WAN_ACCELERATOR = "WAN_ACCELERATOR"
    SAN_PROCESSOR = "SAN_PROCESSOR"
    VIRTUAL_SERVER_RHL = "VIRTUAL_SERVER_RHL"
    VIRTUAL_SERVER_WINDOWS = "VIRTUAL_SERVER_WINDOWS"
    ES_XI = "ESXi"
    VIRTUAL_SERVER = "VIRTUAL_SERVER"
    HYPERVISOR = "HYPERVISOR"
    AWS_AMI = "AWS_AMI"
    MS_AZURE = "MS_AZURE"
    UNKNOWN = "UNKNOWN"


@dataclass
class DeviceSummary:
    agent_id: Optional[int] = field(default=None)
    agent_name: Optional[str] = field(default=None)
    ambient_temperature: Optional[float] = field(default=None)
    collect_time: Optional[str] = field(default=None)
    device_tsmo_key: Optional[str] = field(default=None)
    device_url: Optional[str] = field(default=None)
    heating_margin: Optional[float] = field(default=None)
    heating_margin_unit: Optional[str] = field(default=None)
    id: Optional[int] = field(default=None)
    name: Optional[str] = field(default=None)
    power_consumption: Optional[float] = field(default=None)
    power_consumption_unit: Optional[str] = field(default=None)
    product_version: Optional[str] = field(default=None)
    server_id: Optional[int] = field(default=None)
    server_name: Optional[str] = field(default=None)
    sid: Optional[str] = field(default=None)
    type: Optional[DeviceSummaryTypeEnum] = field(default=None)
    update_timestamp: Optional[int] = field(default=None)
    
