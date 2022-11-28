from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostAPIV1UserSubscriptionsQueryParams:
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAPIV1UserSubscriptionsRequest:
    query_params: PostAPIV1UserSubscriptionsQueryParams = field()
    

@dataclass
class PostAPIV1UserSubscriptionsResponse:
    content_type: str = field()
    status_code: int = field()
    
