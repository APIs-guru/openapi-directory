from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetSavedQueryQueryParams:
    q: Optional[shared.GetListSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetSavedQuerySecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetSavedQueryRequest:
    query_params: GetSavedQueryQueryParams = field(default=None)
    security: GetSavedQuerySecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetSavedQuery200ApplicationJSONDescriptionColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetSavedQuery200ApplicationJSONLabelColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetSavedQuery200ApplicationJSON:
    count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    description_columns: Optional[GetSavedQuery200ApplicationJSONDescriptionColumns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description_columns' }})
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    label_columns: Optional[GetSavedQuery200ApplicationJSONLabelColumns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_columns' }})
    list_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list_columns' }})
    list_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list_title' }})
    order_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_columns' }})
    result: Optional[List[shared.SavedQueryRestAPIGetList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class GetSavedQuery400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSavedQuery401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSavedQuery422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSavedQuery500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetSavedQueryResponse:
    content_type: str = field(default=None)
    get_saved_query_200_application_json_object: Optional[GetSavedQuery200ApplicationJSON] = field(default=None)
    get_saved_query_400_application_json_object: Optional[GetSavedQuery400ApplicationJSON] = field(default=None)
    get_saved_query_401_application_json_object: Optional[GetSavedQuery401ApplicationJSON] = field(default=None)
    get_saved_query_422_application_json_object: Optional[GetSavedQuery422ApplicationJSON] = field(default=None)
    get_saved_query_500_application_json_object: Optional[GetSavedQuery500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
