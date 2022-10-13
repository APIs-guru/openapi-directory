from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import depositswitchcreaterequestoptions

class DepositSwitchCreateRequestCountryCodeCountryCodeEnum(str, Enum):
    US = "US"
    CA = "CA"


@dataclass_json
@dataclass
class DepositSwitchCreateRequest:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    country_code: Optional[DepositSwitchCreateRequestCountryCodeCountryCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code' }})
    options: Optional[depositswitchcreaterequestoptions.DepositSwitchCreateRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    target_access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_access_token' }})
    target_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_account_id' }})
    
