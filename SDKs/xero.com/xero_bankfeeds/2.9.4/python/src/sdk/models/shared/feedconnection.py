from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import countrycode_enum
from . import currencycode_enum
from . import error

class FeedConnectionStatusEnum(str, Enum):
    PENDING = "PENDING"
    REJECTED = "REJECTED"


@dataclass_json
@dataclass
class FeedConnection:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountName' }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountNumber' }})
    account_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountToken' }})
    account_type: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountType' }})
    country: Optional[countrycode_enum.CountryCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    currency: Optional[currencycode_enum.CurrencyCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    error: Optional[error.Error] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: Optional[FeedConnectionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
