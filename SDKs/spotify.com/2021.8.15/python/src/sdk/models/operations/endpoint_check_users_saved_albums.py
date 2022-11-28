from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EndpointCheckUsersSavedAlbumsQueryParams:
    ids: str = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointCheckUsersSavedAlbumsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointCheckUsersSavedAlbumsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointCheckUsersSavedAlbumsRequest:
    headers: EndpointCheckUsersSavedAlbumsHeaders = field()
    query_params: EndpointCheckUsersSavedAlbumsQueryParams = field()
    security: EndpointCheckUsersSavedAlbumsSecurity = field()
    

@dataclass
class EndpointCheckUsersSavedAlbumsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    endpoint_check_users_saved_albums_200_application_json_booleans: Optional[List[bool]] = field(default=None)
    
