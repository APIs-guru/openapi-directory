from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDatabaseQueryParams:
    q: Optional[shared.GetListSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDatabaseSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDatabaseRequest:
    query_params: GetDatabaseQueryParams = field(default=None)
    security: GetDatabaseSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDatabase200ApplicationJSONDescriptionColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetDatabase200ApplicationJSONLabelColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetDatabase200ApplicationJSON:
    count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    description_columns: Optional[GetDatabase200ApplicationJSONDescriptionColumns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description_columns' }})
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    label_columns: Optional[GetDatabase200ApplicationJSONLabelColumns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_columns' }})
    list_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list_columns' }})
    list_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list_title' }})
    order_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_columns' }})
    result: Optional[List[shared.DatabaseRestAPIGetList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class GetDatabase400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabase401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabase422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabase500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetDatabaseResponse:
    content_type: str = field(default=None)
    get_database_200_application_json_object: Optional[GetDatabase200ApplicationJSON] = field(default=None)
    get_database_400_application_json_object: Optional[GetDatabase400ApplicationJSON] = field(default=None)
    get_database_401_application_json_object: Optional[GetDatabase401ApplicationJSON] = field(default=None)
    get_database_422_application_json_object: Optional[GetDatabase422ApplicationJSON] = field(default=None)
    get_database_500_application_json_object: Optional[GetDatabase500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
