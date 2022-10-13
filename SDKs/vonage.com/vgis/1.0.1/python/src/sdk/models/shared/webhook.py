from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class WebhookEventsEnum(str, Enum):
    CALL = "CALL"

class WebhookMetadataPolicyEnum(str, Enum):
    NONE = "NONE"
    HEADER = "HEADER"
    BODY = "BODY"

class WebhookSigningAlgoEnum(str, Enum):
    HMAC_SHA256 = "HMAC_SHA256"
    NONE = "NONE"


@dataclass_json
@dataclass
class WebhookStatistics:
    failed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed' }})
    total_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalAttempts' }})
    total_failures: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalFailures' }})
    total_successes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSuccesses' }})
    
class WebhookStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    PAUSED = "PAUSED"


@dataclass_json
@dataclass
class Webhook:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    events: Optional[List[WebhookEventsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    expire_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireAt' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metadata_policy: Optional[WebhookMetadataPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataPolicy' }})
    purge_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purgeAt' }})
    renewed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewedAt' }})
    signing_algo: Optional[WebhookSigningAlgoEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingAlgo' }})
    signing_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingKey' }})
    statistics: Optional[WebhookStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistics' }})
    status: Optional[WebhookStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
