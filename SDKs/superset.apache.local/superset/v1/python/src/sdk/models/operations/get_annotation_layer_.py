from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetAnnotationLayerQueryParams:
    q: Optional[shared.GetListSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetAnnotationLayerSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAnnotationLayerRequest:
    query_params: GetAnnotationLayerQueryParams = field(default=None)
    security: GetAnnotationLayerSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetAnnotationLayer200ApplicationJSONDescriptionColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayer200ApplicationJSONLabelColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayer200ApplicationJSON:
    count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    description_columns: Optional[GetAnnotationLayer200ApplicationJSONDescriptionColumns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description_columns' }})
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    label_columns: Optional[GetAnnotationLayer200ApplicationJSONLabelColumns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_columns' }})
    list_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list_columns' }})
    list_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list_title' }})
    order_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_columns' }})
    result: Optional[List[shared.AnnotationLayerRestAPIGetList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayer400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayer401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayer422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayer500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetAnnotationLayerResponse:
    content_type: str = field(default=None)
    get_annotation_layer_200_application_json_object: Optional[GetAnnotationLayer200ApplicationJSON] = field(default=None)
    get_annotation_layer_400_application_json_object: Optional[GetAnnotationLayer400ApplicationJSON] = field(default=None)
    get_annotation_layer_401_application_json_object: Optional[GetAnnotationLayer401ApplicationJSON] = field(default=None)
    get_annotation_layer_422_application_json_object: Optional[GetAnnotationLayer422ApplicationJSON] = field(default=None)
    get_annotation_layer_500_application_json_object: Optional[GetAnnotationLayer500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
