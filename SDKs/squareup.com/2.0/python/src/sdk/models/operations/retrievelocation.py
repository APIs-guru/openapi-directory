from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveLocationPathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveLocationSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveLocationRequest:
    path_params: RetrieveLocationPathParams = field(default=None)
    security: RetrieveLocationSecurity = field(default=None)
    

@dataclass
class RetrieveLocationResponse:
    content_type: str = field(default=None)
    retrieve_location_response: Optional[shared.RetrieveLocationResponse] = field(default=None)
    status_code: int = field(default=None)
    
