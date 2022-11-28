from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams:
    additional_types: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'additional_types', 'style': 'form', 'explode': True }})
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetInformationAboutTheUsersCurrentPlaybackRequest:
    headers: EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders = field()
    query_params: EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams = field()
    security: EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity = field()
    

@dataclass
class EndpointGetInformationAboutTheUsersCurrentPlaybackResponse:
    content_type: str = field()
    status_code: int = field()
    currently_playing_context_object: Optional[shared.CurrentlyPlayingContextObject] = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
