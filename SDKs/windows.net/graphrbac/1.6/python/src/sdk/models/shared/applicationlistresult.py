from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApplicationListResult:
    odata_next_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'odata.nextLink' }})
    value: Optional[List[dict[str, dict[str, Any]]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
