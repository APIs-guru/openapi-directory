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
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointGetNewReleasesSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetNewReleasesRequest:
    query_params: EndpointGetNewReleasesQueryParams = field(default=None)
    headers: EndpointGetNewReleasesHeaders = field(default=None)
    security: EndpointGetNewReleasesSecurity = field(default=None)
    

@dataclass
class EndpointGetNewReleasesResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    new_releases_object: Optional[shared.NewReleasesObject] = field(default=None)
    status_code: int = field(default=None)
    
