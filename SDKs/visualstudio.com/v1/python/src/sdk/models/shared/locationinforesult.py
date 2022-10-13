from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import skuinforesult


@dataclass_json
@dataclass
class LocationInfoResult:
    default_auto_suspend_delay_minutes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultAutoSuspendDelayMinutes' }})
    skus: Optional[List[skuinforesult.SkuInfoResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skus' }})
    
