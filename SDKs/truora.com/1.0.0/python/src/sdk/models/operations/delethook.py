from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeletHookPathParams:
    hook_id: str = field(default=None, metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletHookSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeletHookRequest:
    path_params: DeletHookPathParams = field(default=None)
    security: DeletHookSecurity = field(default=None)
    

@dataclass
class DeletHookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delet_hook_200_application_json_string: Optional[str] = field(default=None)
    
