from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetQueryQueryParams:
    q: Optional[shared.GetListSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetQuerySecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetQueryRequest:
    query_params: GetQueryQueryParams = field(default=None)
    security: GetQuerySecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetQuery200ApplicationJSONDescriptionColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetQuery200ApplicationJSONLabelColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetQuery200ApplicationJSON:
    count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    description_columns: Optional[GetQuery200ApplicationJSONDescriptionColumns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description_columns' }})
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    label_columns: Optional[GetQuery200ApplicationJSONLabelColumns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_columns' }})
    list_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list_columns' }})
    list_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list_title' }})
    order_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_columns' }})
    result: Optional[List[shared.QueryRestAPIGetList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class GetQuery400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetQuery401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetQuery422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetQuery500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetQueryResponse:
    content_type: str = field(default=None)
    get_query_200_application_json_object: Optional[GetQuery200ApplicationJSON] = field(default=None)
    get_query_400_application_json_object: Optional[GetQuery400ApplicationJSON] = field(default=None)
    get_query_401_application_json_object: Optional[GetQuery401ApplicationJSON] = field(default=None)
    get_query_422_application_json_object: Optional[GetQuery422ApplicationJSON] = field(default=None)
    get_query_500_application_json_object: Optional[GetQuery500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
