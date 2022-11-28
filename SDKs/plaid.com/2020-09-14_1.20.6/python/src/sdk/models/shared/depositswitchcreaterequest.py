from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DepositSwitchCreateRequestCountryCodeEnum(str, Enum):
    US = "US"
    CA = "CA"


@dataclass_json
@dataclass
class DepositSwitchCreateRequest:
    r"""DepositSwitchCreateRequest
    DepositSwitchCreateRequest defines the request schema for `/deposit_switch/create`
    """
    
    target_access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_access_token') }})
    target_account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_account_id') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    country_code: Optional[DepositSwitchCreateRequestCountryCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code') }})
    options: Optional[DepositSwitchCreateRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
