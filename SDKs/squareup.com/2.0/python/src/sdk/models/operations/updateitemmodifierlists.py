from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateItemModifierListsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateItemModifierListsRequest:
    request: shared.UpdateItemModifierListsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateItemModifierListsSecurity = field(default=None)
    

@dataclass
class UpdateItemModifierListsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_item_modifier_lists_response: Optional[shared.UpdateItemModifierListsResponse] = field(default=None)
    
