from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ListSourceServicePlansPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSourceServicePlansQueryParams:
    filter: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclass
class ListSourceServicePlansRequest:
    path_params: ListSourceServicePlansPathParams = field(default=None)
    query_params: ListSourceServicePlansQueryParams = field(default=None)
    

@dataclass
class ListSourceServicePlansResponse:
    content_type: str = field(default=None)
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    service_plans_collection: Optional[shared.ServicePlansCollection] = field(default=None)
    status_code: int = field(default=None)
    
