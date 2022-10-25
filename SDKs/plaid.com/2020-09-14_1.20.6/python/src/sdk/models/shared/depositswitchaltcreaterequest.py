from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import depositswitchcreaterequestoptions

class DepositSwitchAltCreateRequestCountryCodeEnum(str, Enum):
    US = "US"
    CA = "CA"


@dataclass_json
@dataclass
class DepositSwitchAltCreateRequest:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    country_code: Optional[DepositSwitchAltCreateRequestCountryCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code' }})
    options: Optional[depositswitchcreaterequestoptions.DepositSwitchCreateRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    target_account: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_account' }})
    target_user: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_user' }})
    
