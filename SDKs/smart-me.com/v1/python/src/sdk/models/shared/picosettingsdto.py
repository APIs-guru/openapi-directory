from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PicoSettingsDtoAuthenticationTypeEnum(str, Enum):
    NONE = "None"
    BACKEND = "Backend"


@dataclass_json
@dataclass
class PicoSettingsDto:
    r"""PicoSettingsDto
    DTO for the pico charging station settings
    """
    
    authentication_type: Optional[PicoSettingsDtoAuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthenticationType') }})
    display_brightness: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayBrightness') }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsName') }})
    idle_image_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdleImageData') }})
    idle_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdleImageUrl') }})
    internal_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InternalIp') }})
    loadmanagement_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoadmanagementGroupId') }})
    max_current: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCurrent') }})
    min_current: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinCurrent') }})
    modbus_tcp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModbusTcp') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
