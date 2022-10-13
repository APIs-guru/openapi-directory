from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import link
from . import earlydaymotion


@dataclass_json
@dataclass
class EarlyDayMotionItem:
    links: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    value: Optional[earlydaymotion.EarlyDayMotion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
