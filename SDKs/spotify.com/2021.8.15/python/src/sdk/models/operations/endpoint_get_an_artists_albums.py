from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointGetAnArtistsAlbumsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnArtistsAlbumsQueryParams:
    include_groups: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include_groups', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetAnArtistsAlbumsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnArtistsAlbumsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAnArtistsAlbumsRequest:
    path_params: EndpointGetAnArtistsAlbumsPathParams = field(default=None)
    query_params: EndpointGetAnArtistsAlbumsQueryParams = field(default=None)
    headers: EndpointGetAnArtistsAlbumsHeaders = field(default=None)
    security: EndpointGetAnArtistsAlbumsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class EndpointGetAnArtistsAlbums200ApplicationJSON:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    items: Optional[List[shared.SimplifiedAlbumObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class EndpointGetAnArtistsAlbumsResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    endpoint_get_an_artists_albums_200_application_json_object: Optional[EndpointGetAnArtistsAlbums200ApplicationJSON] = field(default=None)
    
