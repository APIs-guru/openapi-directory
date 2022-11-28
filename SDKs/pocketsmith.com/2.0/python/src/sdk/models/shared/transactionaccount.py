from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TransactionAccountTypeEnum(str, Enum):
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
class TransactionAccount:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_code') }})
    current_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_balance') }})
    current_balance_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_balance_date') }})
    current_balance_exchange_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_balance_exchange_rate') }})
    current_balance_in_base_currency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_balance_in_base_currency') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    institution: Optional[Institution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('institution') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    safe_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safe_balance') }})
    safe_balance_in_base_currency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safe_balance_in_base_currency') }})
    starting_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starting_balance') }})
    starting_balance_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starting_balance_date') }})
    type: Optional[TransactionAccountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    
