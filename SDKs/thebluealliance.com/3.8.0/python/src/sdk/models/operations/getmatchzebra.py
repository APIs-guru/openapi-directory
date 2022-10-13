from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMatchZebraPathParams:
    match_key: str = field(default=None, metadata={'path_param': { 'field_name': 'match_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMatchZebraHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetMatchZebraSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMatchZebraRequest:
    path_params: GetMatchZebraPathParams = field(default=None)
    headers: GetMatchZebraHeaders = field(default=None)
    security: GetMatchZebraSecurity = field(default=None)
    

@dataclass
class GetMatchZebraResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    zebra: Optional[shared.Zebra] = field(default=None)
    
