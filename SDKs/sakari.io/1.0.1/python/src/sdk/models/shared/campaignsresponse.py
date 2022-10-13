from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import campaign


@dataclass_json
@dataclass
class CampaignsResponseError:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CampaignsResponsePagination:
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    

@dataclass_json
@dataclass
class CampaignsResponse:
    data: Optional[List[campaign.Campaign]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    error: Optional[CampaignsResponseError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    pagination: Optional[CampaignsResponsePagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    
