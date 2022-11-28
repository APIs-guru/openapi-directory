from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointSetVolumeForUsersPlaybackQueryParams:
    volume_percent: int = field(metadata={'query_param': { 'field_name': 'volume_percent', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointSetVolumeForUsersPlaybackHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointSetVolumeForUsersPlaybackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointSetVolumeForUsersPlaybackRequest:
    headers: EndpointSetVolumeForUsersPlaybackHeaders = field()
    query_params: EndpointSetVolumeForUsersPlaybackQueryParams = field()
    security: EndpointSetVolumeForUsersPlaybackSecurity = field()
    

@dataclass
class EndpointSetVolumeForUsersPlaybackResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
