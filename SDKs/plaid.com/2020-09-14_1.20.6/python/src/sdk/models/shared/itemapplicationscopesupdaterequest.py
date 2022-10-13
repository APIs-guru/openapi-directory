from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import scopes


@dataclass_json
@dataclass
class ItemApplicationScopesUpdateRequest:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_id' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    scopes: scopes.Scopes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
