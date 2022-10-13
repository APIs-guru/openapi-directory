from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostScriptsInstancesInstanceIDEnablePathParams:
    instance_id: str = field(default=None, metadata={'path_param': { 'field_name': 'instanceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostScriptsInstancesInstanceIDEnableRequest:
    path_params: PostScriptsInstancesInstanceIDEnablePathParams = field(default=None)
    

@dataclass
class PostScriptsInstancesInstanceIDEnableResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    script_instance_details: Optional[shared.ScriptInstanceDetails] = field(default=None)
    status_code: int = field(default=None)
    
