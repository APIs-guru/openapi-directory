from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetGroupsByIdsQueryParams:
    group_ids: str = field(metadata={'query_param': { 'field_name': 'group_ids', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGroupsByIdsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_code: Optional[shared.SchemeOauth2Code] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_implicit: Optional[shared.SchemeOauth2Implicit] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetGroupsByIdsRequest:
    query_params: GetGroupsByIdsQueryParams = field()
    security: GetGroupsByIdsSecurity = field()
    

@dataclass
class GetGroupsByIdsResponse:
    content_type: str = field()
    status_code: int = field()
    groups: Optional[List[shared.Group]] = field(default=None)
    
