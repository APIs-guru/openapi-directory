from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMatchPathParams:
    match_key: str = field(metadata={'path_param': { 'field_name': 'match_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMatchHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMatchRequest:
    headers: GetMatchHeaders = field()
    path_params: GetMatchPathParams = field()
    security: GetMatchSecurity = field()
    

@dataclass
class GetMatchResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    match: Optional[shared.Match] = field(default=None)
    
