from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import currencyformat
from . import dateformat


@dataclass_json
@dataclass
class BudgetSettings:
    currency_format: currencyformat.CurrencyFormat = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_format' }})
    date_format: dateformat.DateFormat = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_format' }})
    
