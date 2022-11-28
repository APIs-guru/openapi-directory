from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CampaignResponse:
    data: Optional[Campaign] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
