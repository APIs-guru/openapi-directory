from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EndpointCheckUsersSavedEpisodesQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointCheckUsersSavedEpisodesHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointCheckUsersSavedEpisodesSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointCheckUsersSavedEpisodesRequest:
    query_params: EndpointCheckUsersSavedEpisodesQueryParams = field(default=None)
    headers: EndpointCheckUsersSavedEpisodesHeaders = field(default=None)
    security: EndpointCheckUsersSavedEpisodesSecurity = field(default=None)
    

@dataclass
class EndpointCheckUsersSavedEpisodesResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    endpoint_check_users_saved_episodes_200_application_json_booleans: Optional[List[bool]] = field(default=None)
    
