from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostMyConversationsRequestBody:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    cloudinary_photos: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudinary_photos' }})
    listing_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listing_id' }})
    recipient_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_id' }})
    recipient_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_uuid' }})
    shop_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shop_id' }})
    

@dataclass
class PostMyConversationsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyConversationsRequest:
    request: Optional[PostMyConversationsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostMyConversationsSecurity = field(default=None)
    

@dataclass
class PostMyConversationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
