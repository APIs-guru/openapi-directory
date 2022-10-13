from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CreateFundingAccountRequestV2TypeEnum(str, Enum):
    FBO = "FBO"
    WUBS_DECOUPLED = "WUBS_DECOUPLED"


@dataclass_json
@dataclass
class CreateFundingAccountRequestV2:
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountName' }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountNumber' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    payor_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorId' }})
    routing_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routingNumber' }})
    type: CreateFundingAccountRequestV2TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
