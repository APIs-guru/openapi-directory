from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostScriptsInstancesInstanceIDDisablePathParams:
    instance_id: str = field(metadata={'path_param': { 'field_name': 'instanceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostScriptsInstancesInstanceIDDisableRequest:
    path_params: PostScriptsInstancesInstanceIDDisablePathParams = field()
    

@dataclass
class PostScriptsInstancesInstanceIDDisableResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    script_instance_details: Optional[shared.ScriptInstanceDetails] = field(default=None)
    
