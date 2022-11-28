from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WebhookEventResourceAttributes:
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_type: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    

@dataclass_json
@dataclass
class WebhookEventResourceRelationshipsTransactionData:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class WebhookEventResourceRelationshipsTransactionLinks:
    related: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclass
class WebhookEventResourceRelationshipsTransaction:
    data: WebhookEventResourceRelationshipsTransactionData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[WebhookEventResourceRelationshipsTransactionLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclass
class WebhookEventResourceRelationshipsWebhookData:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class WebhookEventResourceRelationshipsWebhookLinks:
    related: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclass
class WebhookEventResourceRelationshipsWebhook:
    data: WebhookEventResourceRelationshipsWebhookData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[WebhookEventResourceRelationshipsWebhookLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclass
class WebhookEventResourceRelationships:
    webhook: WebhookEventResourceRelationshipsWebhook = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    transaction: Optional[WebhookEventResourceRelationshipsTransaction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    

@dataclass_json
@dataclass
class WebhookEventResource:
    r"""WebhookEventResource
    Provides the event data used in asynchronous webhook event callbacks to
    subscribed endpoints. Webhooks events have defined `eventType`s and may
    optionally relate to other resources within the Up API.
    
    """
    
    attributes: WebhookEventResourceAttributes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: WebhookEventResourceRelationships = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
