from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PostWebhooksRegistrationsRequestBodyTopicEnum(str, Enum):
    LISTINGS_UPDATE = "listings/update"
    LISTINGS_PUBLISH = "listings/publish"
    LISTINGS_BUMPS_RAN_OUT = "listings/bumps-ran-out"
    ORDERS_CREATE = "orders/create"
    ORDERS_UPDATE = "orders/update"
    PAYMENTS_CREATE = "payments/create"
    PAYMENTS_UPDATE = "payments/update"
    APP_UNINSTALLED = "app/uninstalled"


@dataclass_json
@dataclass
class PostWebhooksRegistrationsRequestBody:
    topic: PostWebhooksRegistrationsRequestBodyTopicEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class PostWebhooksRegistrationsRequest:
    request: Optional[PostWebhooksRegistrationsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostWebhooksRegistrationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
