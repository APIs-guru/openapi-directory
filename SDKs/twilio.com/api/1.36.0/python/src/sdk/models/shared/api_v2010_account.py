from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import account_enum_status_enum
from . import account_enum_type_enum


@dataclass_json
@dataclass
class APIV2010Account:
    auth_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_token' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    owner_account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner_account_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    status: Optional[account_enum_status_enum.AccountEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subresource_uris: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subresource_uris' }})
    type: Optional[account_enum_type_enum.AccountEnumTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
