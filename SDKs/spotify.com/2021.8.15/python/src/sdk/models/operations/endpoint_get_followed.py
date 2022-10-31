from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetFollowedQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    type: str = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetFollowedHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetFollowedSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetFollowedRequest:
    query_params: EndpointGetFollowedQueryParams = field(default=None)
    headers: EndpointGetFollowedHeaders = field(default=None)
    security: EndpointGetFollowedSecurity = field(default=None)
    

@dataclass
class EndpointGetFollowedResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    following_artists_object: Optional[shared.FollowingArtistsObject] = field(default=None)
    status_code: int = field(default=None)
    
