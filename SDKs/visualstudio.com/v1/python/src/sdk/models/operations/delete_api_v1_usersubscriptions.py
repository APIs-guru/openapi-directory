from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteAPIV1UserSubscriptionsQueryParams:
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteAPIV1UserSubscriptionsRequest:
    query_params: DeleteAPIV1UserSubscriptionsQueryParams = field()
    

@dataclass
class DeleteAPIV1UserSubscriptionsResponse:
    content_type: str = field()
    status_code: int = field()
    
