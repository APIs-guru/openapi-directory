from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SuperFundProduct:
    abn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ABN') }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductName') }})
    spin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SPIN') }})
    usi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('USI') }})
    
