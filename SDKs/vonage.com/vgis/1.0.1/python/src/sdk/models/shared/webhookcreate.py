from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WebhookCreateEventsEnum(str, Enum):
    CALL = "CALL"

class WebhookCreateMetadataPolicyEnum(str, Enum):
    NONE = "NONE"
    HEADER = "HEADER"
    BODY = "BODY"

class WebhookCreateSigningAlgoEnum(str, Enum):
    HMAC_SHA256 = "HMAC_SHA256"


@dataclass_json
@dataclass
class WebhookCreate:
    events: Optional[List[WebhookCreateEventsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    metadata_policy: Optional[WebhookCreateMetadataPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataPolicy') }})
    signing_algo: Optional[WebhookCreateSigningAlgoEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingAlgo') }})
    signing_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingKey') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
