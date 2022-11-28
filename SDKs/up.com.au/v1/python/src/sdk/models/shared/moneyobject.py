from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MoneyObject:
    r"""MoneyObject
    Provides information about a value of money.
    
    """
    
    currency_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    value_in_base_units: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueInBaseUnits') }})
    
