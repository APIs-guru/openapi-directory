from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reference
from . import simpleportrange
from . import reference

class RecommendedRuleActionEnum(str, Enum):
    ALLOW = "ALLOW"
    DROP = "DROP"


@dataclass_json
@dataclass
class RecommendedRule:
    action: Optional[RecommendedRuleActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    destinations: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    port_ranges: Optional[List[simpleportrange.SimplePortRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port_ranges' }})
    protocols: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocols' }})
    sources: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    
