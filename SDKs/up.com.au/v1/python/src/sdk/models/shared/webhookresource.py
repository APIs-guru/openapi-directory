from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WebhookResourceAttributes:
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    secret_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretKey') }})
    

@dataclass_json
@dataclass
class WebhookResourceLinks:
    self: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class WebhookResourceRelationshipsLogsLinks:
    related: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclass
class WebhookResourceRelationshipsLogs:
    links: Optional[WebhookResourceRelationshipsLogsLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclass
class WebhookResourceRelationships:
    logs: WebhookResourceRelationshipsLogs = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logs') }})
    

@dataclass_json
@dataclass
class WebhookResource:
    r"""WebhookResource
    Provides information about a webhook.
    
    """
    
    attributes: WebhookResourceAttributes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: WebhookResourceRelationships = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    links: Optional[WebhookResourceLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
