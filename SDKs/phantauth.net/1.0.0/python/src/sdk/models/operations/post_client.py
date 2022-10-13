from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostClientRequestBody:
    at_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@id' }})
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    client_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_name' }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_secret' }})
    client_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_uri' }})
    contacts: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contacts' }})
    grant_types: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grant_types' }})
    jwks: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwks' }})
    jwks_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwks_uri' }})
    logo_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo_email' }})
    logo_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo_uri' }})
    policy_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy_uri' }})
    redirect_uris: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_uris' }})
    response_types: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response_types' }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    software_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'software_id' }})
    software_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'software_version' }})
    token_endpoint_auth_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_endpoint_auth_method' }})
    tos_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tos_uri' }})
    

@dataclass
class PostClientRequest:
    request: Optional[PostClientRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostClientResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
