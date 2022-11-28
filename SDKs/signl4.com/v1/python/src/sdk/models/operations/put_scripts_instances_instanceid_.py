from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutScriptsInstancesInstanceIDPathParams:
    instance_id: str = field(metadata={'path_param': { 'field_name': 'instanceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutScriptsInstancesInstanceIDRequests:
    script_instance_details: Optional[shared.ScriptInstanceDetails] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    script_instance_details1: Optional[shared.ScriptInstanceDetails] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    script_instance_details2: Optional[shared.ScriptInstanceDetails] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    script_instance_details3: Optional[shared.ScriptInstanceDetails] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutScriptsInstancesInstanceIDRequest:
    path_params: PutScriptsInstancesInstanceIDPathParams = field()
    request: Optional[PutScriptsInstancesInstanceIDRequests] = field(default=None)
    

@dataclass
class PutScriptsInstancesInstanceIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    script_instance_details: Optional[shared.ScriptInstanceDetails] = field(default=None)
    
