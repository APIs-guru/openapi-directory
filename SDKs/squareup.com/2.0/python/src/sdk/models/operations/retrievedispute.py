from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveDisputePathParams:
    dispute_id: str = field(default=None, metadata={'path_param': { 'field_name': 'dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveDisputeSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveDisputeRequest:
    path_params: RetrieveDisputePathParams = field(default=None)
    security: RetrieveDisputeSecurity = field(default=None)
    

@dataclass
class RetrieveDisputeResponse:
    content_type: str = field(default=None)
    retrieve_dispute_response: Optional[shared.RetrieveDisputeResponse] = field(default=None)
    status_code: int = field(default=None)
    
