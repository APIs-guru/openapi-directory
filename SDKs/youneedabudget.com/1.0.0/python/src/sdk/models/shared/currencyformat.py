from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CurrencyFormat:
    currency_symbol: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_symbol' }})
    decimal_digits: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decimal_digits' }})
    decimal_separator: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decimal_separator' }})
    display_symbol: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_symbol' }})
    example_format: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'example_format' }})
    group_separator: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_separator' }})
    iso_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso_code' }})
    symbol_first: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'symbol_first' }})
    
