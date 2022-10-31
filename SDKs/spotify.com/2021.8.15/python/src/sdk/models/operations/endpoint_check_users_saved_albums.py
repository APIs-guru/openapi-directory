from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EndpointCheckUsersSavedAlbumsQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointCheckUsersSavedAlbumsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointCheckUsersSavedAlbumsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointCheckUsersSavedAlbumsRequest:
    query_params: EndpointCheckUsersSavedAlbumsQueryParams = field(default=None)
    headers: EndpointCheckUsersSavedAlbumsHeaders = field(default=None)
    security: EndpointCheckUsersSavedAlbumsSecurity = field(default=None)
    

@dataclass
class EndpointCheckUsersSavedAlbumsResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    endpoint_check_users_saved_albums_200_application_json_booleans: Optional[List[bool]] = field(default=None)
    
