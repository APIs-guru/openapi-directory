from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetGroupsByIdsQueryParams:
    group_ids: str = field(default=None, metadata={'query_param': { 'field_name': 'group_ids', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGroupsByIdsSecurityOption1:
    oauth2_implicit: shared.SchemeOauth2Implicit = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetGroupsByIdsSecurityOption2:
    oauth2_code: shared.SchemeOauth2Code = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetGroupsByIdsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetGroupsByIdsSecurity:
    option1: Optional[GetGroupsByIdsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetGroupsByIdsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetGroupsByIdsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetGroupsByIdsRequest:
    query_params: GetGroupsByIdsQueryParams = field(default=None)
    security: GetGroupsByIdsSecurity = field(default=None)
    

@dataclass
class GetGroupsByIdsResponse:
    content_type: str = field(default=None)
    groups: Optional[List[shared.Group]] = field(default=None)
    status_code: int = field(default=None)
    
