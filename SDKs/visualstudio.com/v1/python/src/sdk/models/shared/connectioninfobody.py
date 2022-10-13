from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConnectionInfoBody:
    connection_service_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionServiceUri' }})
    connection_session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionSessionId' }})
    connection_session_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionSessionPath' }})
    host_public_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostPublicKeys' }})
    relay_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relayEndpoint' }})
    relay_sas_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relaySasToken' }})
    session_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionToken' }})
    
