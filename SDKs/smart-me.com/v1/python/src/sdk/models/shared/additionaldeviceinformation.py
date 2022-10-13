from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AdditionalDeviceInformation:
    additional_meter_serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalMeterSerialNumber' }})
    firmware_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirmwareVersion' }})
    hardware_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HardwareVersion' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }})
    network_connection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkConnection' }})
    network_connection_rssi: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkConnectionRSSI' }})
    
