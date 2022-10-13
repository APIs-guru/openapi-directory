from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ListServiceInventoriesQueryParams:
    filter: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclass
class ListServiceInventoriesRequest:
    query_params: ListServiceInventoriesQueryParams = field(default=None)
    

@dataclass
class ListServiceInventoriesResponse:
    content_type: str = field(default=None)
    service_inventories_collection: Optional[shared.ServiceInventoriesCollection] = field(default=None)
    status_code: int = field(default=None)
    
