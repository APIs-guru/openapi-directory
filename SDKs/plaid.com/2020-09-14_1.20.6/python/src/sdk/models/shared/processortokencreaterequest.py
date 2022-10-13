from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ProcessorTokenCreateRequestProcessorEnum(str, Enum):
    ACHQ = "achq"
    ALPACA = "alpaca"
    ASTRA = "astra"
    CHECK = "check"
    CHECKBOOK = "checkbook"
    CIRCLE = "circle"
    DRIVEWEALTH = "drivewealth"
    DWOLLA = "dwolla"
    GALILEO = "galileo"
    LITHIC = "lithic"
    MODERN_TREASURY = "modern_treasury"
    MOOV = "moov"
    OCROLUS = "ocrolus"
    PRIME_TRUST = "prime_trust"
    RIZE = "rize"
    SILA_MONEY = "sila_money"
    SBV_API = "sbv_api"
    UNIT = "unit"
    VESTA = "vesta"
    VOPAY = "vopay"
    WYRE = "wyre"


@dataclass_json
@dataclass
class ProcessorTokenCreateRequest:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    processor: ProcessorTokenCreateRequestProcessorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processor' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
