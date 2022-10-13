from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import relatedresultresponse


@dataclass_json
@dataclass
class RelatedResponseSchema:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    result: Optional[List[relatedresultresponse.RelatedResultResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
