from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMatchSimplePathParams:
    match_key: str = field(metadata={'path_param': { 'field_name': 'match_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMatchSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMatchSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMatchSimpleRequest:
    headers: GetMatchSimpleHeaders = field()
    path_params: GetMatchSimplePathParams = field()
    security: GetMatchSimpleSecurity = field()
    

@dataclass
class GetMatchSimpleResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    match_simple: Optional[shared.MatchSimple] = field(default=None)
    
