from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetStatusHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStatusSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetStatusRequest:
    headers: GetStatusHeaders = field()
    security: GetStatusSecurity = field()
    

@dataclass
class GetStatusResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    api_status: Optional[shared.APIStatus] = field(default=None)
    
