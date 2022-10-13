from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import inputconfigurationcontainer
from . import outputconfigurationcontainer
from . import switchconfigurationcontainer

class SmartMeDeviceConfigurationContainerDNSUpdateStateEnum(str, Enum):
    NO_UPDATE = "NoUpdate"
    DNS_UPDATE_PUBLIC_IP = "DnsUpdatePublicIp"
    DNS_UPDATE_INTERNAL_IP = "DnsUpdateInternalIp"

class SmartMeDeviceConfigurationContainerUploadIntervalEnum(str, Enum):
    UPLOAD_INTERVAL_1S = "UploadInterval_1s"
    UPLOAD_INTERVAL_5S = "UploadInterval_5s"
    UPLOAD_INTERVAL_10S = "UploadInterval_10s"
    UPLOAD_INTERVAL_30S = "UploadInterval_30s"
    UPLOAD_INTERVAL_60S = "UploadInterval_60s"
    UPLOAD_INTERVAL_5MIN = "UploadInterval_5min"
    UPLOAD_INTERVAL_15MIN = "UploadInterval_15min"
    UPLOAD_INTERVAL_30MIN = "UploadInterval_30min"
    UPLOAD_INTERVAL_60MIN = "UploadInterval_60min"
    UPLOAD_INTERVAL_6H = "UploadInterval_6h"
    UPLOAD_INTERVAL_12H = "UploadInterval_12h"
    UPLOAD_INTERVAL_24H = "UploadInterval_24h"


@dataclass_json
@dataclass
class SmartMeDeviceConfigurationContainer:
    device_encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceEncryptionKey' }})
    device_pin_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DevicePinCode' }})
    dns_update_state: Optional[SmartMeDeviceConfigurationContainerDNSUpdateStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsUpdateState' }})
    enable_modbus_tcp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableModbusTcp' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    input_configuration: Optional[List[inputconfigurationcontainer.InputConfigurationContainer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputConfiguration' }})
    output_configuration: Optional[List[outputconfigurationcontainer.OutputConfigurationContainer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputConfiguration' }})
    show_reactive_energy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShowReactiveEnergy' }})
    switch_configuration: Optional[List[switchconfigurationcontainer.SwitchConfigurationContainer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SwitchConfiguration' }})
    upload_interval: Optional[SmartMeDeviceConfigurationContainerUploadIntervalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UploadInterval' }})
    
