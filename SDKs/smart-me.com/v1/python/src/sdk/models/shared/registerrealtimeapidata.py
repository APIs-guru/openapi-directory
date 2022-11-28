from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RegisterRealtimeAPIDataRegistrationTypeEnum(str, Enum):
    DISABLED = "Disabled"
    SINGLE_METER_REGISTRATION = "SingleMeterRegistration"
    USER_REGISTRATION = "UserRegistration"


@dataclass_json
@dataclass
class RegisterRealtimeAPIData:
    r"""RegisterRealtimeAPIData
    Container class for the register realtime API API
    """
    
    api_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiUrl') }, 'form': { 'field_name': 'ApiUrl' }})
    basic_auth_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BasicAuthPassword') }, 'form': { 'field_name': 'BasicAuthPassword' }})
    basic_auth_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BasicAuthUsername') }, 'form': { 'field_name': 'BasicAuthUsername' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }, 'form': { 'field_name': 'Id' }})
    meter_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MeterId') }, 'form': { 'field_name': 'MeterId' }})
    registration_type: Optional[RegisterRealtimeAPIDataRegistrationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrationType') }, 'form': { 'field_name': 'RegistrationType' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SerialNumber') }, 'form': { 'field_name': 'SerialNumber' }})
    
