from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""ProcessorTokenCreateRequest
    ProcessorTokenCreateRequest defines the request schema for `/processor/token/create`
    """
    
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    processor: ProcessorTokenCreateRequestProcessorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('processor') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
