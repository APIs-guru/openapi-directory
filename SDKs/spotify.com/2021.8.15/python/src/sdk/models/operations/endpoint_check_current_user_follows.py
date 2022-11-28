from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EndpointCheckCurrentUserFollowsQueryParams:
    ids: str = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    type: str = field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointCheckCurrentUserFollowsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointCheckCurrentUserFollowsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointCheckCurrentUserFollowsRequest:
    headers: EndpointCheckCurrentUserFollowsHeaders = field()
    query_params: EndpointCheckCurrentUserFollowsQueryParams = field()
    security: EndpointCheckCurrentUserFollowsSecurity = field()
    

@dataclass
class EndpointCheckCurrentUserFollowsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    endpoint_check_current_user_follows_200_application_json_booleans: Optional[List[bool]] = field(default=None)
    
