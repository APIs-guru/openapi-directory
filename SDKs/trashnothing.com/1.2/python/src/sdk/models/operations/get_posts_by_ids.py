from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPostsByIdsQueryParams:
    post_ids: str = field(default=None, metadata={'query_param': { 'field_name': 'post_ids', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPostsByIdsSecurityOption1:
    oauth2_implicit: shared.SchemeOauth2Implicit = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPostsByIdsSecurityOption2:
    oauth2_code: shared.SchemeOauth2Code = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPostsByIdsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetPostsByIdsSecurity:
    option1: Optional[GetPostsByIdsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetPostsByIdsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetPostsByIdsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetPostsByIdsRequest:
    query_params: GetPostsByIdsQueryParams = field(default=None)
    security: GetPostsByIdsSecurity = field(default=None)
    

@dataclass
class GetPostsByIdsResponse:
    content_type: str = field(default=None)
    posts: Optional[List[shared.Post]] = field(default=None)
    status_code: int = field(default=None)
    
