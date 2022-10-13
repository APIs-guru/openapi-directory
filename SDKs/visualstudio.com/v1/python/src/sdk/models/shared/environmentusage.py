from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourceusagedetail
from . import sku


@dataclass_json
@dataclass
class EnvironmentUsage:
    end_state: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endState' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    resource_usage: Optional[resourceusagedetail.ResourceUsageDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceUsage' }})
    sku: Optional[sku.Sku] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    usage: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage' }})
    
