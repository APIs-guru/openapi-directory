from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EndpointCheckUsersSavedTracksQueryParams:
    ids: str = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointCheckUsersSavedTracksHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointCheckUsersSavedTracksSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointCheckUsersSavedTracksRequest:
    headers: EndpointCheckUsersSavedTracksHeaders = field()
    query_params: EndpointCheckUsersSavedTracksQueryParams = field()
    security: EndpointCheckUsersSavedTracksSecurity = field()
    

@dataclass
class EndpointCheckUsersSavedTracksResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    endpoint_check_users_saved_tracks_200_application_json_booleans: Optional[List[bool]] = field(default=None)
    
