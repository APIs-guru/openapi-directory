from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteScriptsInstancesInstanceIDPathParams:
    instance_id: str = field(default=None, metadata={'path_param': { 'field_name': 'instanceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteScriptsInstancesInstanceIDRequest:
    path_params: DeleteScriptsInstancesInstanceIDPathParams = field(default=None)
    

@dataclass
class DeleteScriptsInstancesInstanceIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
