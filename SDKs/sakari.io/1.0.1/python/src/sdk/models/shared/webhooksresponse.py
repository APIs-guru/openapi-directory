from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import webhook


@dataclass_json
@dataclass
class WebhooksResponseError:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class WebhooksResponsePagination:
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    

@dataclass_json
@dataclass
class WebhooksResponse:
    data: Optional[List[webhook.Webhook]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    error: Optional[WebhooksResponseError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    pagination: Optional[WebhooksResponsePagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    
