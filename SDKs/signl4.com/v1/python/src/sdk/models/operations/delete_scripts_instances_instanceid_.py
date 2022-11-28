from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteScriptsInstancesInstanceIDPathParams:
    instance_id: str = field(metadata={'path_param': { 'field_name': 'instanceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteScriptsInstancesInstanceIDRequest:
    path_params: DeleteScriptsInstancesInstanceIDPathParams = field()
    

@dataclass
class DeleteScriptsInstancesInstanceIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
