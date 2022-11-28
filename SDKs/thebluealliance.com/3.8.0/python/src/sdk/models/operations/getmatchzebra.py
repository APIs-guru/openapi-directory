from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMatchZebraPathParams:
    match_key: str = field(metadata={'path_param': { 'field_name': 'match_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMatchZebraHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMatchZebraSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMatchZebraRequest:
    headers: GetMatchZebraHeaders = field()
    path_params: GetMatchZebraPathParams = field()
    security: GetMatchZebraSecurity = field()
    

@dataclass
class GetMatchZebraResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    zebra: Optional[shared.Zebra] = field(default=None)
    
