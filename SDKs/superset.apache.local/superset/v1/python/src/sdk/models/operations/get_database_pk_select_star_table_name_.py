from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDatabasePkSelectStarTableNamePathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    table_name: str = field(default=None, metadata={'path_param': { 'field_name': 'table_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatabasePkSelectStarTableNameQueryParams:
    schema_name: str = field(default=None, metadata={'query_param': { 'field_name': 'schema_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDatabasePkSelectStarTableNameSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDatabasePkSelectStarTableNameRequest:
    path_params: GetDatabasePkSelectStarTableNamePathParams = field(default=None)
    query_params: GetDatabasePkSelectStarTableNameQueryParams = field(default=None)
    security: GetDatabasePkSelectStarTableNameSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDatabasePkSelectStarTableName400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabasePkSelectStarTableName401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabasePkSelectStarTableName404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabasePkSelectStarTableName422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabasePkSelectStarTableName500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetDatabasePkSelectStarTableNameResponse:
    content_type: str = field(default=None)
    get_database_pk_select_star_table_name_400_application_json_object: Optional[GetDatabasePkSelectStarTableName400ApplicationJSON] = field(default=None)
    get_database_pk_select_star_table_name_401_application_json_object: Optional[GetDatabasePkSelectStarTableName401ApplicationJSON] = field(default=None)
    get_database_pk_select_star_table_name_404_application_json_object: Optional[GetDatabasePkSelectStarTableName404ApplicationJSON] = field(default=None)
    get_database_pk_select_star_table_name_422_application_json_object: Optional[GetDatabasePkSelectStarTableName422ApplicationJSON] = field(default=None)
    get_database_pk_select_star_table_name_500_application_json_object: Optional[GetDatabasePkSelectStarTableName500ApplicationJSON] = field(default=None)
    select_star_response_schema: Optional[shared.SelectStarResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
