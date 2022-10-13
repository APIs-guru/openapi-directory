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
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointGetFeaturedPlaylistsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetFeaturedPlaylistsRequest:
    query_params: EndpointGetFeaturedPlaylistsQueryParams = field(default=None)
    headers: EndpointGetFeaturedPlaylistsHeaders = field(default=None)
    security: EndpointGetFeaturedPlaylistsSecurity = field(default=None)
    

@dataclass
class EndpointGetFeaturedPlaylistsResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    featured_playlist_object: Optional[shared.FeaturedPlaylistObject] = field(default=None)
    status_code: int = field(default=None)
    
