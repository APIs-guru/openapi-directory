from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetCheckPathParams:
    check_id: str = field(metadata={'path_param': { 'field_name': 'check_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCheckSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetCheckRequest:
    path_params: GetCheckPathParams = field()
    security: GetCheckSecurity = field()
    

@dataclass
class GetCheckResponse:
    content_type: str = field()
    status_code: int = field()
    check_output: Optional[shared.CheckOutput] = field(default=None)
    error: Optional[Any] = field(default=None)
    
