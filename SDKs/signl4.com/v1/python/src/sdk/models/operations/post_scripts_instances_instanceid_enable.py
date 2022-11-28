from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostScriptsInstancesInstanceIDEnablePathParams:
    instance_id: str = field(metadata={'path_param': { 'field_name': 'instanceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostScriptsInstancesInstanceIDEnableRequest:
    path_params: PostScriptsInstancesInstanceIDEnablePathParams = field()
    

@dataclass
class PostScriptsInstancesInstanceIDEnableResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    script_instance_details: Optional[shared.ScriptInstanceDetails] = field(default=None)
    
