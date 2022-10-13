from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TipSettings:
    allow_tipping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_tipping' }})
    custom_tip_field: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_tip_field' }})
    separate_tip_screen: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'separate_tip_screen' }})
    smart_tipping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smart_tipping' }})
    tip_percentages: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tip_percentages' }})
    
