from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pagedresultspubliccontinuationtoken
from . import overviewalert


@dataclass_json
@dataclass
class OverviewAlertPagedResultsPublic:
    continuation_token: Optional[pagedresultspubliccontinuationtoken.PagedResultsPublicContinuationToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continuationToken' }})
    has_more: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasMore' }})
    results: Optional[List[overviewalert.OverviewAlert]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
