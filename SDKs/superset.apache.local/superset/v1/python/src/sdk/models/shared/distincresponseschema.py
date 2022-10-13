from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import distinctresultresponse


@dataclass_json
@dataclass
class DistincResponseSchema:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    result: Optional[List[distinctresultresponse.DistinctResultResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
