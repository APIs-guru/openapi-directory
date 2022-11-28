from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PostMyConversationsRequestBody:
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    cloudinary_photos: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudinary_photos') }})
    listing_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listing_id') }})
    recipient_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient_id') }})
    recipient_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient_uuid') }})
    shop_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shop_id') }})
    

@dataclass
class PostMyConversationsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyConversationsRequest:
    security: PostMyConversationsSecurity = field()
    request: Optional[PostMyConversationsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostMyConversationsResponse:
    content_type: str = field()
    status_code: int = field()
    
