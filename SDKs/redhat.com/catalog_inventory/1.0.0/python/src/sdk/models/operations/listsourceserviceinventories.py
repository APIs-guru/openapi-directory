from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ListSourceServiceInventoriesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSourceServiceInventoriesQueryParams:
    filter: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclass
class ListSourceServiceInventoriesRequest:
    path_params: ListSourceServiceInventoriesPathParams = field()
    query_params: ListSourceServiceInventoriesQueryParams = field()
    

@dataclass
class ListSourceServiceInventoriesResponse:
    content_type: str = field()
    status_code: int = field()
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    service_inventories_collection: Optional[shared.ServiceInventoriesCollection] = field(default=None)
    
