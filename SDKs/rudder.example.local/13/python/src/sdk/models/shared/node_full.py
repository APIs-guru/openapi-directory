from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NodeFullBios:
    r"""NodeFullBios
    BIOS information
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    editor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editor') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    release_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseDate') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class NodeFullControllers:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class NodeFullEnvironmentVariables:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class NodeFullFileSystems:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    file_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileCount') }})
    free_space: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeSpace') }})
    mount_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPoint') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    total_space: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSpace') }})
    
class NodeFullMachineTypeEnum(str, Enum):
    PHYSICAL = "Physical"
    VIRTUAL = "Virtual"


@dataclass_json
@dataclass
class NodeFullMachine:
    r"""NodeFullMachine
    Information about the underlying machine
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    type: Optional[NodeFullMachineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class NodeFullManagementTechnology:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    capabilities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    node_kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeKind') }})
    root_components: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootComponents') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class NodeFullManagementTechnologyDetails:
    r"""NodeFullManagementTechnologyDetails
    Additional information about management technology
    """
    
    cfengine_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cfengineKeys') }})
    cfengine_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cfengineUser') }})
    

@dataclass_json
@dataclass
class NodeFullMemories:
    r"""NodeFullMemories
    Memory slots
    """
    
    capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacity') }})
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caption') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    slot_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotNumber') }})
    speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speed') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class NodeFullNetworkInterfaces:
    dhcp_server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpServer') }})
    ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddresses') }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macAddress') }})
    mask: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mask') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    speed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speed') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class NodeFullOsTypeEnum(str, Enum):
    WINDOWS = "Windows"
    LINUX = "Linux"
    AIX = "AIX"
    FREE_BSD = "FreeBSD"


@dataclass_json
@dataclass
class NodeFullOs:
    r"""NodeFullOs
    Information about the operating system
    """
    
    full_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullName') }})
    kernel_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kernelVersion') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: NodeFullOsTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    service_pack: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicePack') }})
    
class NodeFullPolicyModeEnum(str, Enum):
    ENFORCE = "enforce"
    AUDIT = "audit"
    DEFAULT = "default"


@dataclass_json
@dataclass
class NodeFullPorts:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class NodeFullProcesses:
    r"""NodeFullProcesses
    Process information
    """
    
    cpu_usage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuUsage') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    memory: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pid') }})
    started: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('started'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tty: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tty') }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    virtual_memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualMemory') }})
    

@dataclass_json
@dataclass
class NodeFullProcessors:
    arch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arch') }})
    core: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('core') }})
    cpuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuid') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    external_clock: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalClock') }})
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speed') }})
    stepping: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepping') }})
    thread: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thread') }})
    

@dataclass_json
@dataclass
class NodeFullProperties:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class NodeFullSlots:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class NodeFullSoftwareLicense:
    r"""NodeFullSoftwareLicense
    Information about the license
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expiration_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    oem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oem') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    product_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productKey') }})
    

@dataclass_json
@dataclass
class NodeFullSoftware:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    editor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editor') }})
    license: Optional[NodeFullSoftwareLicense] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    release_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class NodeFullSound:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    
class NodeFullStatusEnum(str, Enum):
    PENDING = "pending"
    ACCEPTED = "accepted"
    DELETED = "deleted"


@dataclass_json
@dataclass
class NodeFullStorage:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    firmware: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firmware') }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class NodeFullTimezone:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    

@dataclass_json
@dataclass
class NodeFullVideos:
    chipset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chipset') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    

@dataclass_json
@dataclass
class NodeFullVirtualMachines:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subsystem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subsystem') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    vcpu: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcpu') }})
    

@dataclass_json
@dataclass
class NodeFull:
    hostname: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip_addresses: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddresses') }})
    management_technology: List[NodeFullManagementTechnology] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('managementTechnology') }})
    policy_server_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyServerId') }})
    properties: List[NodeFullProperties] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    status: NodeFullStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    architecture_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('architectureDescription') }})
    bios: Optional[NodeFullBios] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bios') }})
    controllers: Optional[List[NodeFullControllers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controllers') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environment_variables: Optional[List[NodeFullEnvironmentVariables]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    file_systems: Optional[List[NodeFullFileSystems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSystems') }})
    last_inventory_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastInventoryDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_run_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRunDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    machine: Optional[NodeFullMachine] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machine') }})
    management_technology_details: Optional[NodeFullManagementTechnologyDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managementTechnologyDetails') }})
    memories: Optional[List[NodeFullMemories]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memories') }})
    network_interfaces: Optional[List[NodeFullNetworkInterfaces]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    os: Optional[NodeFullOs] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    policy_mode: Optional[NodeFullPolicyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyMode') }})
    ports: Optional[List[NodeFullPorts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    processes: Optional[List[NodeFullProcesses]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processes') }})
    processors: Optional[List[NodeFullProcessors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processors') }})
    ram: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ram') }})
    slots: Optional[List[NodeFullSlots]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slots') }})
    software: Optional[List[NodeFullSoftware]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('software') }})
    sound: Optional[List[NodeFullSound]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sound') }})
    storage: Optional[List[NodeFullStorage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storage') }})
    timezone: Optional[NodeFullTimezone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    videos: Optional[List[NodeFullVideos]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    virtual_machines: Optional[List[NodeFullVirtualMachines]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualMachines') }})
    
