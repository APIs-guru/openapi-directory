from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetCheckPathParams:
    check_id: str = field(default=None, metadata={'path_param': { 'field_name': 'check_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCheckSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetCheckRequest:
    path_params: GetCheckPathParams = field(default=None)
    security: GetCheckSecurity = field(default=None)
    

@dataclass
class GetCheckResponse:
    check_output: Optional[shared.CheckOutput] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
