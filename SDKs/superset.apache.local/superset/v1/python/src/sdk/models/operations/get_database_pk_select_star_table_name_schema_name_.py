from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDatabasePkSelectStarTableNameSchemaNamePathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    schema_name: str = field(default=None, metadata={'path_param': { 'field_name': 'schema_name', 'style': 'simple', 'explode': False }})
    table_name: str = field(default=None, metadata={'path_param': { 'field_name': 'table_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatabasePkSelectStarTableNameSchemaNameSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDatabasePkSelectStarTableNameSchemaNameRequest:
    path_params: GetDatabasePkSelectStarTableNameSchemaNamePathParams = field(default=None)
    security: GetDatabasePkSelectStarTableNameSchemaNameSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDatabasePkSelectStarTableNameSchemaName400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabasePkSelectStarTableNameSchemaName401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabasePkSelectStarTableNameSchemaName404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabasePkSelectStarTableNameSchemaName422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabasePkSelectStarTableNameSchemaName500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetDatabasePkSelectStarTableNameSchemaNameResponse:
    content_type: str = field(default=None)
    get_database_pk_select_star_table_name_schema_name_400_application_json_object: Optional[GetDatabasePkSelectStarTableNameSchemaName400ApplicationJSON] = field(default=None)
    get_database_pk_select_star_table_name_schema_name_401_application_json_object: Optional[GetDatabasePkSelectStarTableNameSchemaName401ApplicationJSON] = field(default=None)
    get_database_pk_select_star_table_name_schema_name_404_application_json_object: Optional[GetDatabasePkSelectStarTableNameSchemaName404ApplicationJSON] = field(default=None)
    get_database_pk_select_star_table_name_schema_name_422_application_json_object: Optional[GetDatabasePkSelectStarTableNameSchemaName422ApplicationJSON] = field(default=None)
    get_database_pk_select_star_table_name_schema_name_500_application_json_object: Optional[GetDatabasePkSelectStarTableNameSchemaName500ApplicationJSON] = field(default=None)
    select_star_response_schema: Optional[shared.SelectStarResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
