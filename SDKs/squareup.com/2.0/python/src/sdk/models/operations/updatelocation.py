from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateLocationPathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLocationSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateLocationRequest:
    path_params: UpdateLocationPathParams = field(default=None)
    request: shared.UpdateLocationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateLocationSecurity = field(default=None)
    

@dataclass
class UpdateLocationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_location_response: Optional[shared.UpdateLocationResponse] = field(default=None)
    
