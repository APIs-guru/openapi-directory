from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeletHookPathParams:
    hook_id: str = field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletHookSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeletHookRequest:
    path_params: DeletHookPathParams = field()
    security: DeletHookSecurity = field()
    

@dataclass
class DeletHookResponse:
    content_type: str = field()
    status_code: int = field()
    delet_hook_200_application_json_string: Optional[str] = field(default=None)
    
