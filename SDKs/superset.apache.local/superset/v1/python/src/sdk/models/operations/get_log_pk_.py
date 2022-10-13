from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLogPkPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLogPkQueryParams:
    q: Optional[shared.GetItemSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetLogPkSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLogPkRequest:
    path_params: GetLogPkPathParams = field(default=None)
    query_params: GetLogPkQueryParams = field(default=None)
    security: GetLogPkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLogPk200ApplicationJSONDescriptionColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetLogPk200ApplicationJSONLabelColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetLogPk200ApplicationJSON:
    description_columns: Optional[GetLogPk200ApplicationJSONDescriptionColumns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description_columns' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label_columns: Optional[GetLogPk200ApplicationJSONLabelColumns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_columns' }})
    result: Optional[shared.LogRestAPIGet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    show_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_columns' }})
    show_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_title' }})
    

@dataclass_json
@dataclass
class GetLogPk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetLogPk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetLogPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetLogPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetLogPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetLogPkResponse:
    content_type: str = field(default=None)
    get_log_pk_200_application_json_object: Optional[GetLogPk200ApplicationJSON] = field(default=None)
    get_log_pk_400_application_json_object: Optional[GetLogPk400ApplicationJSON] = field(default=None)
    get_log_pk_401_application_json_object: Optional[GetLogPk401ApplicationJSON] = field(default=None)
    get_log_pk_404_application_json_object: Optional[GetLogPk404ApplicationJSON] = field(default=None)
    get_log_pk_422_application_json_object: Optional[GetLogPk422ApplicationJSON] = field(default=None)
    get_log_pk_500_application_json_object: Optional[GetLogPk500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
