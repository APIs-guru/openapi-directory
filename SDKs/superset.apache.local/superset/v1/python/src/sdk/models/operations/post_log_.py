from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostLogSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostLogRequest:
    request: shared.LogRestAPIPost = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostLogSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostLog201ApplicationJSON:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: Optional[shared.LogRestAPIPost] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class PostLog400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostLog401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostLog422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostLog500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostLogResponse:
    content_type: str = field(default=None)
    post_log_201_application_json_object: Optional[PostLog201ApplicationJSON] = field(default=None)
    post_log_400_application_json_object: Optional[PostLog400ApplicationJSON] = field(default=None)
    post_log_401_application_json_object: Optional[PostLog401ApplicationJSON] = field(default=None)
    post_log_422_application_json_object: Optional[PostLog422ApplicationJSON] = field(default=None)
    post_log_500_application_json_object: Optional[PostLog500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
