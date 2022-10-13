from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasourceentityid


@dataclass_json
@dataclass
class DataSourceListResponse:
    results: Optional[List[datasourceentityid.DataSourceEntityID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    
