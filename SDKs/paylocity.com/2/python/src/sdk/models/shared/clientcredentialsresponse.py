from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClientCredentialsResponse:
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    client_secret_expiration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecretExpirationDate' }})
    
