from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams:
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    position_ms: int = field(default=None, metadata={'query_param': { 'field_name': 'position_ms', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointSeekToPositionInCurrentlyPlayingTrackHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointSeekToPositionInCurrentlyPlayingTrackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointSeekToPositionInCurrentlyPlayingTrackRequest:
    query_params: EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams = field(default=None)
    headers: EndpointSeekToPositionInCurrentlyPlayingTrackHeaders = field(default=None)
    security: EndpointSeekToPositionInCurrentlyPlayingTrackSecurity = field(default=None)
    

@dataclass
class EndpointSeekToPositionInCurrentlyPlayingTrackResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
