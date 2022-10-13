from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PicoSettingsDtoAuthenticationTypeEnum(str, Enum):
    NONE = "None"
    BACKEND = "Backend"


@dataclass_json
@dataclass
class PicoSettingsDto:
    authentication_type: Optional[PicoSettingsDtoAuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthenticationType' }})
    display_brightness: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayBrightness' }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsName' }})
    idle_image_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdleImageData' }})
    idle_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdleImageUrl' }})
    internal_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InternalIp' }})
    loadmanagement_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoadmanagementGroupId' }})
    max_current: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxCurrent' }})
    min_current: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinCurrent' }})
    modbus_tcp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModbusTcp' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
