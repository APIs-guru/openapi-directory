from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostCachekeyInvalidateSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostCachekeyInvalidateRequest:
    request: shared.CacheInvalidationRequestSchema = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostCachekeyInvalidateSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostCachekeyInvalidate400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostCachekeyInvalidate500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostCachekeyInvalidateResponse:
    content_type: str = field(default=None)
    post_cachekey_invalidate_400_application_json_object: Optional[PostCachekeyInvalidate400ApplicationJSON] = field(default=None)
    post_cachekey_invalidate_500_application_json_object: Optional[PostCachekeyInvalidate500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
