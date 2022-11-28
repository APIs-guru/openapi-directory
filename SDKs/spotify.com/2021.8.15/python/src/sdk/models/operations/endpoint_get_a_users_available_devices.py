from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAUsersAvailableDevicesHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAUsersAvailableDevicesSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAUsersAvailableDevicesRequest:
    headers: EndpointGetAUsersAvailableDevicesHeaders = field()
    security: EndpointGetAUsersAvailableDevicesSecurity = field()
    

@dataclass
class EndpointGetAUsersAvailableDevicesResponse:
    content_type: str = field()
    status_code: int = field()
    devices_object: Optional[shared.DevicesObject] = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
