from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    topic: PostWebhooksRegistrationsRequestBodyTopicEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass
class PostWebhooksRegistrationsRequest:
    request: Optional[PostWebhooksRegistrationsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostWebhooksRegistrationsResponse:
    content_type: str = field()
    status_code: int = field()
    
