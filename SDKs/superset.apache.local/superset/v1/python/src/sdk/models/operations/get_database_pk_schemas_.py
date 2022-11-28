from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDatabasePkSchemasPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatabasePkSchemasQueryParams:
    q: Optional[shared.DatabaseSchemasQuerySchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDatabasePkSchemasSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDatabasePkSchemas400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabasePkSchemas401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabasePkSchemas404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabasePkSchemas500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetDatabasePkSchemasRequest:
    path_params: GetDatabasePkSchemasPathParams = field()
    query_params: GetDatabasePkSchemasQueryParams = field()
    security: GetDatabasePkSchemasSecurity = field()
    

@dataclass
class GetDatabasePkSchemasResponse:
    content_type: str = field()
    status_code: int = field()
    get_database_pk_schemas_400_application_json_object: Optional[GetDatabasePkSchemas400ApplicationJSON] = field(default=None)
    get_database_pk_schemas_401_application_json_object: Optional[GetDatabasePkSchemas401ApplicationJSON] = field(default=None)
    get_database_pk_schemas_404_application_json_object: Optional[GetDatabasePkSchemas404ApplicationJSON] = field(default=None)
    get_database_pk_schemas_500_application_json_object: Optional[GetDatabasePkSchemas500ApplicationJSON] = field(default=None)
    schemas_response_schema: Optional[shared.SchemasResponseSchema] = field(default=None)
    
