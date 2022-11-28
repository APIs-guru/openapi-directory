from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PriceFormatted:
    american: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('american') }})
    decimal: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decimal') }})
    fractional: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fractional') }})
    
