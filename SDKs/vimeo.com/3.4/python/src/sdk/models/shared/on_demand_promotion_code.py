from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OnDemandPromotionCode:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    max_uses: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_uses' }})
    uses: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uses' }})
    
