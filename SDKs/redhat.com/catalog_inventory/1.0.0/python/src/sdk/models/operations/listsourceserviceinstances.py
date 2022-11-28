from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ListSourceServiceInstancesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSourceServiceInstancesQueryParams:
    filter: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclass
class ListSourceServiceInstancesRequest:
    path_params: ListSourceServiceInstancesPathParams = field()
    query_params: ListSourceServiceInstancesQueryParams = field()
    

@dataclass
class ListSourceServiceInstancesResponse:
    content_type: str = field()
    status_code: int = field()
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    service_instances_collection: Optional[shared.ServiceInstancesCollection] = field(default=None)
    
