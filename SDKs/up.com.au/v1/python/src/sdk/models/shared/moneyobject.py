from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MoneyObject:
    currency_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    value_in_base_units: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueInBaseUnits' }})
    
