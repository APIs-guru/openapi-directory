from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDatabasePkFunctionNamesPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatabasePkFunctionNamesSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDatabasePkFunctionNamesRequest:
    path_params: GetDatabasePkFunctionNamesPathParams = field(default=None)
    security: GetDatabasePkFunctionNamesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDatabasePkFunctionNames401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabasePkFunctionNames404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabasePkFunctionNames500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetDatabasePkFunctionNamesResponse:
    content_type: str = field(default=None)
    database_function_names_response: Optional[shared.DatabaseFunctionNamesResponse] = field(default=None)
    get_database_pk_function_names_401_application_json_object: Optional[GetDatabasePkFunctionNames401ApplicationJSON] = field(default=None)
    get_database_pk_function_names_404_application_json_object: Optional[GetDatabasePkFunctionNames404ApplicationJSON] = field(default=None)
    get_database_pk_function_names_500_application_json_object: Optional[GetDatabasePkFunctionNames500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
