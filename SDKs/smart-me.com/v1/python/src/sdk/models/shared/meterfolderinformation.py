from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MeterFolderInformation:
    r"""MeterFolderInformation
    Container Class for the Web API
    """
    
    communication_module_firmware_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommunicationModuleFirmwareVersion') }})
    communication_module_hardware_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommunicationModuleHardwareVersion') }})
    firmware_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirmwareVersion') }})
    hardware_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HardwareVersion') }})
    input_informations: Optional[List[InputInformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputInformations') }})
    is_folder: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsFolder') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    output_informations: Optional[List[OutputInformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputInformations') }})
    
