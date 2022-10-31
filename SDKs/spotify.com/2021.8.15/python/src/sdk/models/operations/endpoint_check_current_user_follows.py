from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EndpointCheckCurrentUserFollowsQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    type: str = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointCheckCurrentUserFollowsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointCheckCurrentUserFollowsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointCheckCurrentUserFollowsRequest:
    query_params: EndpointCheckCurrentUserFollowsQueryParams = field(default=None)
    headers: EndpointCheckCurrentUserFollowsHeaders = field(default=None)
    security: EndpointCheckCurrentUserFollowsSecurity = field(default=None)
    

@dataclass
class EndpointCheckCurrentUserFollowsResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    endpoint_check_current_user_follows_200_application_json_booleans: Optional[List[bool]] = field(default=None)
    
