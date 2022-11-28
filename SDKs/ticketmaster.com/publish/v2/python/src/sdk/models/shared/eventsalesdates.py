from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventSalesDates:
    r"""EventSalesDates
    Event's Sales Dates
    """
    
    presales: Optional[List[Presale]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presales') }})
    public: Optional[PublicSaleDates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    
