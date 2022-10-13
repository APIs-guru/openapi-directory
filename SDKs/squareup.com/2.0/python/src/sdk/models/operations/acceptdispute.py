from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AcceptDisputePathParams:
    dispute_id: str = field(default=None, metadata={'path_param': { 'field_name': 'dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AcceptDisputeSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AcceptDisputeRequest:
    path_params: AcceptDisputePathParams = field(default=None)
    security: AcceptDisputeSecurity = field(default=None)
    

@dataclass
class AcceptDisputeResponse:
    accept_dispute_response: Optional[shared.AcceptDisputeResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
