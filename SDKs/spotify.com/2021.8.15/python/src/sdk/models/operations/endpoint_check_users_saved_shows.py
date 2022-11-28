from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EndpointCheckUsersSavedShowsQueryParams:
    ids: str = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointCheckUsersSavedShowsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointCheckUsersSavedShowsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointCheckUsersSavedShowsRequest:
    headers: EndpointCheckUsersSavedShowsHeaders = field()
    query_params: EndpointCheckUsersSavedShowsQueryParams = field()
    security: EndpointCheckUsersSavedShowsSecurity = field()
    

@dataclass
class EndpointCheckUsersSavedShowsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    endpoint_check_users_saved_shows_200_application_json_booleans: Optional[List[bool]] = field(default=None)
    
