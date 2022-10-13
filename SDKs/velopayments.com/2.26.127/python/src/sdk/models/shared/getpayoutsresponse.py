from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import payoutsummaryaudit


@dataclass_json
@dataclass
class GetPayoutsResponse:
    content: Optional[List[payoutsummaryaudit.PayoutSummaryAudit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    links: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    page: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    
