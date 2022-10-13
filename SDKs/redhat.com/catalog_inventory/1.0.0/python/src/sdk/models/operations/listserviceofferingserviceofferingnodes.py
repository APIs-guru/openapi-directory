from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ListServiceOfferingServiceOfferingNodesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListServiceOfferingServiceOfferingNodesQueryParams:
    filter: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclass
class ListServiceOfferingServiceOfferingNodesRequest:
    path_params: ListServiceOfferingServiceOfferingNodesPathParams = field(default=None)
    query_params: ListServiceOfferingServiceOfferingNodesQueryParams = field(default=None)
    

@dataclass
class ListServiceOfferingServiceOfferingNodesResponse:
    content_type: str = field(default=None)
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    service_offering_nodes_collection: Optional[shared.ServiceOfferingNodesCollection] = field(default=None)
    status_code: int = field(default=None)
    
