from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import category_enum


@dataclass_json
@dataclass
class UpdateWebhookRequest:
    authorization_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationHeader' }})
    categories: Optional[List[category_enum.CategoryEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookUrl' }})
    
