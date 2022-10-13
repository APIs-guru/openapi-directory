from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetAnnotationLayerPkAnnotationPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnnotationLayerPkAnnotationQueryParams:
    q: Optional[shared.GetListSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetAnnotationLayerPkAnnotationSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAnnotationLayerPkAnnotationRequest:
    path_params: GetAnnotationLayerPkAnnotationPathParams = field(default=None)
    query_params: GetAnnotationLayerPkAnnotationQueryParams = field(default=None)
    security: GetAnnotationLayerPkAnnotationSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetAnnotationLayerPkAnnotation200ApplicationJSON:
    count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    result: Optional[List[shared.AnnotationRestAPIGetList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerPkAnnotation400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerPkAnnotation401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerPkAnnotation422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerPkAnnotation500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetAnnotationLayerPkAnnotationResponse:
    content_type: str = field(default=None)
    get_annotation_layer_pk_annotation_200_application_json_object: Optional[GetAnnotationLayerPkAnnotation200ApplicationJSON] = field(default=None)
    get_annotation_layer_pk_annotation_400_application_json_object: Optional[GetAnnotationLayerPkAnnotation400ApplicationJSON] = field(default=None)
    get_annotation_layer_pk_annotation_401_application_json_object: Optional[GetAnnotationLayerPkAnnotation401ApplicationJSON] = field(default=None)
    get_annotation_layer_pk_annotation_422_application_json_object: Optional[GetAnnotationLayerPkAnnotation422ApplicationJSON] = field(default=None)
    get_annotation_layer_pk_annotation_500_application_json_object: Optional[GetAnnotationLayerPkAnnotation500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
