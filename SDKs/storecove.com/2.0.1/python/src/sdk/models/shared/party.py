from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Party:
    r"""Party
    A party that can receive or send invoices
    """
    
    address: Address = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    company_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    contact: Optional[Contact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    
