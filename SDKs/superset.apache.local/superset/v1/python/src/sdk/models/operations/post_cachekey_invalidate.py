from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostCachekeyInvalidateSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PostCachekeyInvalidate400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostCachekeyInvalidate500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostCachekeyInvalidateRequest:
    request: shared.CacheInvalidationRequestSchema = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostCachekeyInvalidateSecurity = field()
    

@dataclass
class PostCachekeyInvalidateResponse:
    content_type: str = field()
    status_code: int = field()
    post_cachekey_invalidate_400_application_json_object: Optional[PostCachekeyInvalidate400ApplicationJSON] = field(default=None)
    post_cachekey_invalidate_500_application_json_object: Optional[PostCachekeyInvalidate500ApplicationJSON] = field(default=None)
    
