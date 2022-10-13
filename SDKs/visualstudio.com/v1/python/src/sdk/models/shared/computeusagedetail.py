from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ComputeUsageDetail:
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    usage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage' }})
    
