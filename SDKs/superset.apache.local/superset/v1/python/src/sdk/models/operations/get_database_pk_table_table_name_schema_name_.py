from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDatabasePkTableTableNameSchemaNamePathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    schema_name: str = field(metadata={'path_param': { 'field_name': 'schema_name', 'style': 'simple', 'explode': False }})
    table_name: str = field(metadata={'path_param': { 'field_name': 'table_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatabasePkTableTableNameSchemaNameSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDatabasePkTableTableNameSchemaName400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabasePkTableTableNameSchemaName401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabasePkTableTableNameSchemaName404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabasePkTableTableNameSchemaName422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabasePkTableTableNameSchemaName500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetDatabasePkTableTableNameSchemaNameRequest:
    path_params: GetDatabasePkTableTableNameSchemaNamePathParams = field()
    security: GetDatabasePkTableTableNameSchemaNameSecurity = field()
    

@dataclass
class GetDatabasePkTableTableNameSchemaNameResponse:
    content_type: str = field()
    status_code: int = field()
    get_database_pk_table_table_name_schema_name_400_application_json_object: Optional[GetDatabasePkTableTableNameSchemaName400ApplicationJSON] = field(default=None)
    get_database_pk_table_table_name_schema_name_401_application_json_object: Optional[GetDatabasePkTableTableNameSchemaName401ApplicationJSON] = field(default=None)
    get_database_pk_table_table_name_schema_name_404_application_json_object: Optional[GetDatabasePkTableTableNameSchemaName404ApplicationJSON] = field(default=None)
    get_database_pk_table_table_name_schema_name_422_application_json_object: Optional[GetDatabasePkTableTableNameSchemaName422ApplicationJSON] = field(default=None)
    get_database_pk_table_table_name_schema_name_500_application_json_object: Optional[GetDatabasePkTableTableNameSchemaName500ApplicationJSON] = field(default=None)
    table_metadata_response_schema: Optional[shared.TableMetadataResponseSchema] = field(default=None)
    
