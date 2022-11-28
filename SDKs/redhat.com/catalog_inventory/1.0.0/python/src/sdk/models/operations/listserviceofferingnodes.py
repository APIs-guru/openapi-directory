from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ListServiceOfferingNodesQueryParams:
    filter: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclass
class ListServiceOfferingNodesRequest:
    query_params: ListServiceOfferingNodesQueryParams = field()
    

@dataclass
class ListServiceOfferingNodesResponse:
    content_type: str = field()
    status_code: int = field()
    service_offering_nodes_collection: Optional[shared.ServiceOfferingNodesCollection] = field(default=None)
    
