from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuperFundProducts:
    super_fund_products: Optional[List[SuperFundProduct]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperFundProducts') }})
    
