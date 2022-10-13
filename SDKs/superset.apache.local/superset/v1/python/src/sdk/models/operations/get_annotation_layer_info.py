from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetAnnotationLayerInfoQueryParams:
    q: Optional[shared.GetInfoSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetAnnotationLayerInfoSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAnnotationLayerInfoRequest:
    query_params: GetAnnotationLayerInfoQueryParams = field(default=None)
    security: GetAnnotationLayerInfoSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetAnnotationLayerInfo200ApplicationJSONFiltersColumnName:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerInfo200ApplicationJSONFilters:
    column_name: Optional[List[GetAnnotationLayerInfo200ApplicationJSONFiltersColumnName]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerInfo200ApplicationJSON:
    add_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_columns' }})
    edit_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'edit_columns' }})
    filters: Optional[GetAnnotationLayerInfo200ApplicationJSONFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerInfo400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerInfo401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerInfo422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerInfo500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetAnnotationLayerInfoResponse:
    content_type: str = field(default=None)
    get_annotation_layer_info_200_application_json_object: Optional[GetAnnotationLayerInfo200ApplicationJSON] = field(default=None)
    get_annotation_layer_info_400_application_json_object: Optional[GetAnnotationLayerInfo400ApplicationJSON] = field(default=None)
    get_annotation_layer_info_401_application_json_object: Optional[GetAnnotationLayerInfo401ApplicationJSON] = field(default=None)
    get_annotation_layer_info_422_application_json_object: Optional[GetAnnotationLayerInfo422ApplicationJSON] = field(default=None)
    get_annotation_layer_info_500_application_json_object: Optional[GetAnnotationLayerInfo500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
