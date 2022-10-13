from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutScriptsInstancesInstanceIDDataPathParams:
    instance_id: str = field(default=None, metadata={'path_param': { 'field_name': 'instanceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutScriptsInstancesInstanceIDDataRequests:
    script_instance_custom_user_data: Optional[shared.ScriptInstanceCustomUserData] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    script_instance_custom_user_data1: Optional[shared.ScriptInstanceCustomUserData] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    script_instance_custom_user_data2: Optional[shared.ScriptInstanceCustomUserData] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    script_instance_custom_user_data3: Optional[shared.ScriptInstanceCustomUserData] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutScriptsInstancesInstanceIDDataRequest:
    path_params: PutScriptsInstancesInstanceIDDataPathParams = field(default=None)
    request: Optional[PutScriptsInstancesInstanceIDDataRequests] = field(default=None)
    

@dataclass
class PutScriptsInstancesInstanceIDDataResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    script_instance_details: Optional[shared.ScriptInstanceDetails] = field(default=None)
    status_code: int = field(default=None)
    
