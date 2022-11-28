from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdditionalDeviceInformation:
    r"""AdditionalDeviceInformation
    Additional Information For a device
    """
    
    additional_meter_serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalMeterSerialNumber') }})
    firmware_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirmwareVersion') }})
    hardware_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HardwareVersion') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ID') }})
    network_connection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkConnection') }})
    network_connection_rssi: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkConnectionRSSI') }})
    
