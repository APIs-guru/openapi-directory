from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayeesPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayeesQueryParams:
    last_knowledge_of_server: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPayeesRequest:
    path_params: GetPayeesPathParams = field()
    query_params: GetPayeesQueryParams = field()
    

@dataclass
class GetPayeesResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    payees_response: Optional[shared.PayeesResponse] = field(default=None)
    
