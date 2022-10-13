from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostScriptsInstancesRequests:
    script_instance_details: Optional[shared.ScriptInstanceDetails] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    script_instance_details1: Optional[shared.ScriptInstanceDetails] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    script_instance_details2: Optional[shared.ScriptInstanceDetails] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    script_instance_details3: Optional[shared.ScriptInstanceDetails] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostScriptsInstancesRequest:
    request: Optional[PostScriptsInstancesRequests] = field(default=None)
    

@dataclass
class PostScriptsInstancesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    script_instance_details: Optional[shared.ScriptInstanceDetails] = field(default=None)
    status_code: int = field(default=None)
    
