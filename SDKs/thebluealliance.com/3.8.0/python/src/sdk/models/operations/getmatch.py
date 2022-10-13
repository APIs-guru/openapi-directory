from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMatchPathParams:
    match_key: str = field(default=None, metadata={'path_param': { 'field_name': 'match_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMatchHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetMatchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMatchRequest:
    path_params: GetMatchPathParams = field(default=None)
    headers: GetMatchHeaders = field(default=None)
    security: GetMatchSecurity = field(default=None)
    

@dataclass
class GetMatchResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    match: Optional[shared.Match] = field(default=None)
    status_code: int = field(default=None)
    
