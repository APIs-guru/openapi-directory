from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class CredentialOptionsTypeEnum(str, Enum):
    MIRADORE_API_KEY_V1 = "miradore_api_key_v1"
    AWS_ACCESS_SECRET = "aws_access_secret"


@dataclass_json
@dataclass
class CredentialOptions:
    acl: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acl' }})
    cidrs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cidrs' }})
    global_: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'global' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    secret: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    type: Optional[CredentialOptionsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
