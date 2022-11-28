from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetClientClientIDPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetClientClientID200ApplicationJSON:
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    at_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@id') }})
    client_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_name') }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_secret') }})
    client_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_uri') }})
    contacts: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contacts') }})
    grant_types: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grant_types') }})
    jwks: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwks') }})
    jwks_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwks_uri') }})
    logo_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo_email') }})
    logo_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo_uri') }})
    policy_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy_uri') }})
    redirect_uris: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_uris') }})
    response_types: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response_types') }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    software_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('software_id') }})
    software_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('software_version') }})
    token_endpoint_auth_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_endpoint_auth_method') }})
    tos_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tos_uri') }})
    

@dataclass
class GetClientClientIDRequest:
    path_params: GetClientClientIDPathParams = field()
    

@dataclass
class GetClientClientIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_client_client_id_200_application_json_object: Optional[GetClientClientID200ApplicationJSON] = field(default=None)
    
