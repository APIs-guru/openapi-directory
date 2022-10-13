from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ObtainTokenRequest:
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    client_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_secret' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    grant_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grant_type' }})
    migration_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'migration_token' }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_uri' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_token' }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    short_lived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'short_lived' }})
    
