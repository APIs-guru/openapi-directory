from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SearchDevicesQueryParams:
    search_terms: str = field(metadata={'query_param': { 'field_name': 'searchTerms', 'style': 'form', 'explode': True }})
    application_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'applicationId', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    service_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serviceId', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchDevicesRequest:
    query_params: SearchDevicesQueryParams = field()
    

@dataclass
class SearchDevicesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
