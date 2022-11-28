from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetFeaturedPlaylistsQueryParams:
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    timestamp: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetFeaturedPlaylistsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetFeaturedPlaylistsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetFeaturedPlaylistsRequest:
    headers: EndpointGetFeaturedPlaylistsHeaders = field()
    query_params: EndpointGetFeaturedPlaylistsQueryParams = field()
    security: EndpointGetFeaturedPlaylistsSecurity = field()
    

@dataclass
class EndpointGetFeaturedPlaylistsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    featured_playlist_object: Optional[shared.FeaturedPlaylistObject] = field(default=None)
    
