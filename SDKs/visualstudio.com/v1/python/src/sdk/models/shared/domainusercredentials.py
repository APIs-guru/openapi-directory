from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DomainUserCredentials:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    organizational_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationalUnit' }})
    password_secret_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordSecretIdentifier' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    
