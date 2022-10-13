from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetSavedQueryPkPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSavedQueryPkQueryParams:
    q: Optional[shared.GetItemSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetSavedQueryPkSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetSavedQueryPkRequest:
    path_params: GetSavedQueryPkPathParams = field(default=None)
    query_params: GetSavedQueryPkQueryParams = field(default=None)
    security: GetSavedQueryPkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetSavedQueryPk200ApplicationJSONDescriptionColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetSavedQueryPk200ApplicationJSONLabelColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetSavedQueryPk200ApplicationJSON:
    description_columns: Optional[GetSavedQueryPk200ApplicationJSONDescriptionColumns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description_columns' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label_columns: Optional[GetSavedQueryPk200ApplicationJSONLabelColumns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_columns' }})
    result: Optional[shared.SavedQueryRestAPIGet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    show_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_columns' }})
    show_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_title' }})
    

@dataclass_json
@dataclass
class GetSavedQueryPk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSavedQueryPk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSavedQueryPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSavedQueryPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSavedQueryPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetSavedQueryPkResponse:
    content_type: str = field(default=None)
    get_saved_query_pk_200_application_json_object: Optional[GetSavedQueryPk200ApplicationJSON] = field(default=None)
    get_saved_query_pk_400_application_json_object: Optional[GetSavedQueryPk400ApplicationJSON] = field(default=None)
    get_saved_query_pk_401_application_json_object: Optional[GetSavedQueryPk401ApplicationJSON] = field(default=None)
    get_saved_query_pk_404_application_json_object: Optional[GetSavedQueryPk404ApplicationJSON] = field(default=None)
    get_saved_query_pk_422_application_json_object: Optional[GetSavedQueryPk422ApplicationJSON] = field(default=None)
    get_saved_query_pk_500_application_json_object: Optional[GetSavedQueryPk500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
