from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointSetVolumeForUsersPlaybackQueryParams:
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    volume_percent: int = field(default=None, metadata={'query_param': { 'field_name': 'volume_percent', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointSetVolumeForUsersPlaybackHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointSetVolumeForUsersPlaybackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointSetVolumeForUsersPlaybackRequest:
    query_params: EndpointSetVolumeForUsersPlaybackQueryParams = field(default=None)
    headers: EndpointSetVolumeForUsersPlaybackHeaders = field(default=None)
    security: EndpointSetVolumeForUsersPlaybackSecurity = field(default=None)
    

@dataclass
class EndpointSetVolumeForUsersPlaybackResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
