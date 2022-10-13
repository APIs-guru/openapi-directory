from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class SaveAccountTypeEnum(str, Enum):
    CHECKING = "checking"
    SAVINGS = "savings"
    CREDIT_CARD = "creditCard"
    CASH = "cash"
    LINE_OF_CREDIT = "lineOfCredit"
    OTHER_ASSET = "otherAsset"
    OTHER_LIABILITY = "otherLiability"


@dataclass_json
@dataclass
class SaveAccount:
    balance: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: SaveAccountTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
