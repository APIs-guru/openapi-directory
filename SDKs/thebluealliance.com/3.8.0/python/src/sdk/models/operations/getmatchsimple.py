from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMatchSimplePathParams:
    match_key: str = field(default=None, metadata={'path_param': { 'field_name': 'match_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMatchSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMatchSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMatchSimpleRequest:
    path_params: GetMatchSimplePathParams = field(default=None)
    headers: GetMatchSimpleHeaders = field(default=None)
    security: GetMatchSimpleSecurity = field(default=None)
    

@dataclass
class GetMatchSimpleResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    match_simple: Optional[shared.MatchSimple] = field(default=None)
    status_code: int = field(default=None)
    
