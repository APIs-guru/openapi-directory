from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetNewReleasesQueryParams:
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetNewReleasesHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetNewReleasesSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetNewReleasesRequest:
    headers: EndpointGetNewReleasesHeaders = field()
    query_params: EndpointGetNewReleasesQueryParams = field()
    security: EndpointGetNewReleasesSecurity = field()
    

@dataclass
class EndpointGetNewReleasesResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    new_releases_object: Optional[shared.NewReleasesObject] = field(default=None)
    
