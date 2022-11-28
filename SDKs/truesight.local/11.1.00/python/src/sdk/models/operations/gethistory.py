from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetHistoryQueryParams:
    application_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'applicationId', 'style': 'form', 'explode': True }})
    from_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    service_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serviceId', 'style': 'form', 'explode': True }})
    to: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHistoryRequest:
    query_params: GetHistoryQueryParams = field()
    

@dataclass
class GetHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
