from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class CredentialTypeEnum(str, Enum):
    MIRADORE_API_KEY_V1 = "miradore_api_key_v1"
    AWS_ACCESS_SECRET = "aws_access_secret"


@dataclass_json
@dataclass
class Credential:
    acl: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acl' }})
    cidrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cidrs' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    created_by_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by_email' }})
    created_by_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by_id' }})
    global_: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'global' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_used_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_used_at' }})
    last_used_by_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_used_by_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[CredentialTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
