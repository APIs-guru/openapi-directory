from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_code') }})
    current_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_balance') }})
    current_balance_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_balance_date') }})
    current_balance_exchange_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_balance_exchange_rate') }})
    current_balance_in_base_currency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_balance_in_base_currency') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_net_worth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_net_worth') }})
    primary_scenario: Optional[Scenario] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_scenario') }})
    primary_transaction_account: Optional[TransactionAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_transaction_account') }})
    safe_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safe_balance') }})
    safe_balance_in_base_currency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safe_balance_in_base_currency') }})
    scenarios: Optional[List[Scenario]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scenarios') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    transaction_accounts: Optional[List[TransactionAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_accounts') }})
    type: Optional[AccountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    
