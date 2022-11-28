from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SeldonMessage:
    bin_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binData') }})
    data: Optional[DefaultData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    str_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strData') }})
    
