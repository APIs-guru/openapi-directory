from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import computeusagedetail
from . import storageusagedetail


@dataclass_json
@dataclass
class ResourceUsageDetail:
    compute: Optional[List[computeusagedetail.ComputeUsageDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compute' }})
    storage: Optional[List[storageusagedetail.StorageUsageDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storage' }})
    
