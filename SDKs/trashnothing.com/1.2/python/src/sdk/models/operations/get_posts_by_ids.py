from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPostsByIdsQueryParams:
    post_ids: str = field(metadata={'query_param': { 'field_name': 'post_ids', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPostsByIdsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_code: Optional[shared.SchemeOauth2Code] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_implicit: Optional[shared.SchemeOauth2Implicit] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPostsByIdsRequest:
    query_params: GetPostsByIdsQueryParams = field()
    security: GetPostsByIdsSecurity = field()
    

@dataclass
class GetPostsByIdsResponse:
    content_type: str = field()
    status_code: int = field()
    posts: Optional[List[shared.Post]] = field(default=None)
    
