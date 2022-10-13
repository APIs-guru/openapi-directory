from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PrepaidSettingsInfo:
    top_up_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topUpAmount' }})
    top_up_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topUpEnabled' }})
    top_up_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topUpLimit' }})
    
