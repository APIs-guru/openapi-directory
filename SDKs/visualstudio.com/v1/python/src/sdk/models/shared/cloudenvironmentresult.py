from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connectioninfobody
from . import containerinfobody
from . import gitstatus
from . import connectioninfobody
from . import seedinfobody
from . import subscriptiondata


@dataclass_json
@dataclass
class CloudEnvironmentResult:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    active: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    auto_shutdown_delay_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoShutdownDelayMinutes' }})
    connection: Optional[connectioninfobody.ConnectionInfoBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection' }})
    container: Optional[containerinfobody.ContainerInfoBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    container_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerImage' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    exported_blob_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportedBlobUrl' }})
    features: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendlyName' }})
    git_status: Optional[gitstatus.GitStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitStatus' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_state_update_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStateUpdateReason' }})
    last_used: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUsed', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerId' }})
    plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planId' }})
    platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    port_forwarding_connection: Optional[connectioninfobody.ConnectionInfoBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portForwardingConnection' }})
    recent_folders: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recentFolders' }})
    seed: Optional[seedinfobody.SeedInfoBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seed' }})
    sku_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skuDisplayName' }})
    sku_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skuName' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    subscription_data: Optional[subscriptiondata.SubscriptionData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionData' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
