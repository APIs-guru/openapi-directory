from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CurrencyFormat:
    r"""CurrencyFormat
    The currency format setting for the budget.  In some cases the format will not be available and will be specified as null.
    """
    
    currency_symbol: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_symbol') }})
    decimal_digits: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decimal_digits') }})
    decimal_separator: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decimal_separator') }})
    display_symbol: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_symbol') }})
    example_format: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('example_format') }})
    group_separator: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_separator') }})
    iso_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso_code') }})
    symbol_first: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbol_first') }})
    
