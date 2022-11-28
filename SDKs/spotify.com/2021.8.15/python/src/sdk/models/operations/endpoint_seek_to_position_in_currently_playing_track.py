from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams:
    position_ms: int = field(metadata={'query_param': { 'field_name': 'position_ms', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointSeekToPositionInCurrentlyPlayingTrackHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointSeekToPositionInCurrentlyPlayingTrackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointSeekToPositionInCurrentlyPlayingTrackRequest:
    headers: EndpointSeekToPositionInCurrentlyPlayingTrackHeaders = field()
    query_params: EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams = field()
    security: EndpointSeekToPositionInCurrentlyPlayingTrackSecurity = field()
    

@dataclass
class EndpointSeekToPositionInCurrentlyPlayingTrackResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
