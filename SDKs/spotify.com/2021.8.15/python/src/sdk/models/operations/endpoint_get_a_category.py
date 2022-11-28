from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetACategoryPathParams:
    category_id: str = field(metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetACategoryQueryParams:
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetACategoryHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetACategorySecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetACategoryRequest:
    headers: EndpointGetACategoryHeaders = field()
    path_params: EndpointGetACategoryPathParams = field()
    query_params: EndpointGetACategoryQueryParams = field()
    security: EndpointGetACategorySecurity = field()
    

@dataclass
class EndpointGetACategoryResponse:
    content_type: str = field()
    status_code: int = field()
    category_object: Optional[shared.CategoryObject] = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
