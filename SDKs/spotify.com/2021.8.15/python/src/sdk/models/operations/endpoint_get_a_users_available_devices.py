from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAUsersAvailableDevicesHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAUsersAvailableDevicesSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAUsersAvailableDevicesRequest:
    headers: EndpointGetAUsersAvailableDevicesHeaders = field(default=None)
    security: EndpointGetAUsersAvailableDevicesSecurity = field(default=None)
    

@dataclass
class EndpointGetAUsersAvailableDevicesResponse:
    content_type: str = field(default=None)
    devices_object: Optional[shared.DevicesObject] = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
