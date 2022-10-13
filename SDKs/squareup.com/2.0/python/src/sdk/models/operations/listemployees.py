from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListEmployeesQueryParams:
    batch_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'batch_token', 'style': 'form', 'explode': True }})
    begin_created_at: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'begin_created_at', 'style': 'form', 'explode': True }})
    begin_updated_at: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'begin_updated_at', 'style': 'form', 'explode': True }})
    end_created_at: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_created_at', 'style': 'form', 'explode': True }})
    end_updated_at: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_updated_at', 'style': 'form', 'explode': True }})
    external_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'external_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListEmployeesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListEmployeesRequest:
    query_params: ListEmployeesQueryParams = field(default=None)
    security: ListEmployeesSecurity = field(default=None)
    

@dataclass
class ListEmployeesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v1_employees: Optional[List[shared.V1Employee]] = field(default=None)
    
