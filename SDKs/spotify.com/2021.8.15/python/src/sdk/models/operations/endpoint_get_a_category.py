from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetACategoryPathParams:
    category_id: str = field(default=None, metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetACategoryQueryParams:
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetACategoryHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointGetACategorySecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetACategoryRequest:
    path_params: EndpointGetACategoryPathParams = field(default=None)
    query_params: EndpointGetACategoryQueryParams = field(default=None)
    headers: EndpointGetACategoryHeaders = field(default=None)
    security: EndpointGetACategorySecurity = field(default=None)
    

@dataclass
class EndpointGetACategoryResponse:
    category_object: Optional[shared.CategoryObject] = field(default=None)
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
