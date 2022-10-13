from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AccountTypeEnum(str, Enum):
    CHECKING = "checking"
    SAVINGS = "savings"
    CASH = "cash"
    CREDIT_CARD = "creditCard"
    LINE_OF_CREDIT = "lineOfCredit"
    OTHER_ASSET = "otherAsset"
    OTHER_LIABILITY = "otherLiability"
    PAY_PAL = "payPal"
    MERCHANT_ACCOUNT = "merchantAccount"
    INVESTMENT_ACCOUNT = "investmentAccount"
    MORTGAGE = "mortgage"


@dataclass_json
@dataclass
class Account:
    balance: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    cleared_balance: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cleared_balance' }})
    closed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed' }})
    deleted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    direct_import_in_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direct_import_in_error' }})
    direct_import_linked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direct_import_linked' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    on_budget: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'on_budget' }})
    transfer_payee_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer_payee_id' }})
    type: AccountTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uncleared_balance: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uncleared_balance' }})
    
