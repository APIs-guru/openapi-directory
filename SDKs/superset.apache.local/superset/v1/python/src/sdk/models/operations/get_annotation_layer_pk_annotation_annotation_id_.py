from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetAnnotationLayerPkAnnotationAnnotationIDPathParams:
    annotation_id: int = field(default=None, metadata={'path_param': { 'field_name': 'annotation_id', 'style': 'simple', 'explode': False }})
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnnotationLayerPkAnnotationAnnotationIDQueryParams:
    q: Optional[shared.GetItemSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetAnnotationLayerPkAnnotationAnnotationIDSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAnnotationLayerPkAnnotationAnnotationIDRequest:
    path_params: GetAnnotationLayerPkAnnotationAnnotationIDPathParams = field(default=None)
    query_params: GetAnnotationLayerPkAnnotationAnnotationIDQueryParams = field(default=None)
    security: GetAnnotationLayerPkAnnotationAnnotationIDSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetAnnotationLayerPkAnnotationAnnotationID200ApplicationJSON:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: Optional[shared.AnnotationRestAPIGet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerPkAnnotationAnnotationID400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerPkAnnotationAnnotationID401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerPkAnnotationAnnotationID404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerPkAnnotationAnnotationID422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerPkAnnotationAnnotationID500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetAnnotationLayerPkAnnotationAnnotationIDResponse:
    content_type: str = field(default=None)
    get_annotation_layer_pk_annotation_annotation_id_200_application_json_object: Optional[GetAnnotationLayerPkAnnotationAnnotationID200ApplicationJSON] = field(default=None)
    get_annotation_layer_pk_annotation_annotation_id_400_application_json_object: Optional[GetAnnotationLayerPkAnnotationAnnotationID400ApplicationJSON] = field(default=None)
    get_annotation_layer_pk_annotation_annotation_id_401_application_json_object: Optional[GetAnnotationLayerPkAnnotationAnnotationID401ApplicationJSON] = field(default=None)
    get_annotation_layer_pk_annotation_annotation_id_404_application_json_object: Optional[GetAnnotationLayerPkAnnotationAnnotationID404ApplicationJSON] = field(default=None)
    get_annotation_layer_pk_annotation_annotation_id_422_application_json_object: Optional[GetAnnotationLayerPkAnnotationAnnotationID422ApplicationJSON] = field(default=None)
    get_annotation_layer_pk_annotation_annotation_id_500_application_json_object: Optional[GetAnnotationLayerPkAnnotationAnnotationID500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
