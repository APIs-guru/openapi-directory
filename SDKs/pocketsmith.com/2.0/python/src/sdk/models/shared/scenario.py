from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ScenarioTypeEnum(str, Enum):
    NO_INTEREST = "no-interest"
    SAVINGS = "savings"
    DEBT = "debt"


@dataclass_json
@dataclass
class Scenario:
    achieve_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'achieve_date' }})
    closing_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closing_balance' }})
    closing_balance_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closing_balance_date' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    current_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_balance' }})
    current_balance_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_balance_date' }})
    current_balance_exchange_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_balance_exchange_rate' }})
    current_balance_in_base_currency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_balance_in_base_currency' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interest_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interest_rate' }})
    interest_rate_repeat_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interest_rate_repeat_id' }})
    maximum_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximum-value' }})
    minimum_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimum-value' }})
    safe_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safe_balance' }})
    safe_balance_in_base_currency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safe_balance_in_base_currency' }})
    starting_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starting_balance' }})
    starting_balance_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starting_balance_date' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[ScenarioTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
