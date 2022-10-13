from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    events: Optional[List[WebhookCreateEventsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    metadata_policy: Optional[WebhookCreateMetadataPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataPolicy' }})
    signing_algo: Optional[WebhookCreateSigningAlgoEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingAlgo' }})
    signing_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingKey' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
