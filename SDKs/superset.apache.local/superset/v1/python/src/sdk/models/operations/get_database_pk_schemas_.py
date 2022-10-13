from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDatabasePkSchemasPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatabasePkSchemasQueryParams:
    q: Optional[shared.DatabaseSchemasQuerySchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDatabasePkSchemasSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDatabasePkSchemasRequest:
    path_params: GetDatabasePkSchemasPathParams = field(default=None)
    query_params: GetDatabasePkSchemasQueryParams = field(default=None)
    security: GetDatabasePkSchemasSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDatabasePkSchemas400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabasePkSchemas401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabasePkSchemas404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabasePkSchemas500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetDatabasePkSchemasResponse:
    content_type: str = field(default=None)
    get_database_pk_schemas_400_application_json_object: Optional[GetDatabasePkSchemas400ApplicationJSON] = field(default=None)
    get_database_pk_schemas_401_application_json_object: Optional[GetDatabasePkSchemas401ApplicationJSON] = field(default=None)
    get_database_pk_schemas_404_application_json_object: Optional[GetDatabasePkSchemas404ApplicationJSON] = field(default=None)
    get_database_pk_schemas_500_application_json_object: Optional[GetDatabasePkSchemas500ApplicationJSON] = field(default=None)
    schemas_response_schema: Optional[shared.SchemasResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
