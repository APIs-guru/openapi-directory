from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDatabasePkPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatabasePkQueryParams:
    q: Optional[shared.GetItemSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDatabasePkSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDatabasePk200ApplicationJSONDescriptionColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetDatabasePk200ApplicationJSONLabelColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetDatabasePk200ApplicationJSON:
    description_columns: Optional[GetDatabasePk200ApplicationJSONDescriptionColumns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_columns') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label_columns: Optional[GetDatabasePk200ApplicationJSONLabelColumns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_columns') }})
    result: Optional[shared.DatabaseRestAPIGet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    show_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_columns') }})
    show_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_title') }})
    

@dataclass_json
@dataclass
class GetDatabasePk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabasePk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabasePk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabasePk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabasePk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetDatabasePkRequest:
    path_params: GetDatabasePkPathParams = field()
    query_params: GetDatabasePkQueryParams = field()
    security: GetDatabasePkSecurity = field()
    

@dataclass
class GetDatabasePkResponse:
    content_type: str = field()
    status_code: int = field()
    get_database_pk_200_application_json_object: Optional[GetDatabasePk200ApplicationJSON] = field(default=None)
    get_database_pk_400_application_json_object: Optional[GetDatabasePk400ApplicationJSON] = field(default=None)
    get_database_pk_401_application_json_object: Optional[GetDatabasePk401ApplicationJSON] = field(default=None)
    get_database_pk_404_application_json_object: Optional[GetDatabasePk404ApplicationJSON] = field(default=None)
    get_database_pk_422_application_json_object: Optional[GetDatabasePk422ApplicationJSON] = field(default=None)
    get_database_pk_500_application_json_object: Optional[GetDatabasePk500ApplicationJSON] = field(default=None)
    
