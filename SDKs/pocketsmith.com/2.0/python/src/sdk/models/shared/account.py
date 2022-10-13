from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import scenario
from . import transactionaccount
from . import scenario
from . import transactionaccount

class AccountTypeEnum(str, Enum):
    BANK = "bank"
    CREDITS = "credits"
    CASH = "cash"
    STOCKS = "stocks"
    MORTGAGE = "mortgage"
    LOANS = "loans"
    VEHICLE = "vehicle"
    PROPERTY = "property"
    INSURANCE = "insurance"
    OTHER_LIABILITY = "other_liability"


@dataclass_json
@dataclass
class Account:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_code' }})
    current_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_balance' }})
    current_balance_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_balance_date' }})
    current_balance_exchange_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_balance_exchange_rate' }})
    current_balance_in_base_currency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_balance_in_base_currency' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_net_worth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_net_worth' }})
    primary_scenario: Optional[scenario.Scenario] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_scenario' }})
    primary_transaction_account: Optional[transactionaccount.TransactionAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_transaction_account' }})
    safe_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safe_balance' }})
    safe_balance_in_base_currency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safe_balance_in_base_currency' }})
    scenarios: Optional[List[scenario.Scenario]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scenarios' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    transaction_accounts: Optional[List[transactionaccount.TransactionAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_accounts' }})
    type: Optional[AccountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
