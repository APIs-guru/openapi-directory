from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inputinformation
from . import outputinformation


@dataclass_json
@dataclass
class MeterFolderInformation:
    communication_module_firmware_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommunicationModuleFirmwareVersion' }})
    communication_module_hardware_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommunicationModuleHardwareVersion' }})
    firmware_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirmwareVersion' }})
    hardware_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HardwareVersion' }})
    input_informations: Optional[List[inputinformation.InputInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputInformations' }})
    is_folder: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsFolder' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    output_informations: Optional[List[outputinformation.OutputInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputInformations' }})
    
