from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDatabasePkFunctionNamesPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatabasePkFunctionNamesSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDatabasePkFunctionNames401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabasePkFunctionNames404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabasePkFunctionNames500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetDatabasePkFunctionNamesRequest:
    path_params: GetDatabasePkFunctionNamesPathParams = field()
    security: GetDatabasePkFunctionNamesSecurity = field()
    

@dataclass
class GetDatabasePkFunctionNamesResponse:
    content_type: str = field()
    status_code: int = field()
    database_function_names_response: Optional[shared.DatabaseFunctionNamesResponse] = field(default=None)
    get_database_pk_function_names_401_application_json_object: Optional[GetDatabasePkFunctionNames401ApplicationJSON] = field(default=None)
    get_database_pk_function_names_404_application_json_object: Optional[GetDatabasePkFunctionNames404ApplicationJSON] = field(default=None)
    get_database_pk_function_names_500_application_json_object: Optional[GetDatabasePkFunctionNames500ApplicationJSON] = field(default=None)
    
