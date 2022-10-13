from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteAnnotationLayerPkAnnotationPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAnnotationLayerPkAnnotationQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class DeleteAnnotationLayerPkAnnotationSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteAnnotationLayerPkAnnotationRequest:
    path_params: DeleteAnnotationLayerPkAnnotationPathParams = field(default=None)
    query_params: DeleteAnnotationLayerPkAnnotationQueryParams = field(default=None)
    security: DeleteAnnotationLayerPkAnnotationSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPkAnnotation200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPkAnnotation401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPkAnnotation404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPkAnnotation422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPkAnnotation500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class DeleteAnnotationLayerPkAnnotationResponse:
    content_type: str = field(default=None)
    delete_annotation_layer_pk_annotation_200_application_json_object: Optional[DeleteAnnotationLayerPkAnnotation200ApplicationJSON] = field(default=None)
    delete_annotation_layer_pk_annotation_401_application_json_object: Optional[DeleteAnnotationLayerPkAnnotation401ApplicationJSON] = field(default=None)
    delete_annotation_layer_pk_annotation_404_application_json_object: Optional[DeleteAnnotationLayerPkAnnotation404ApplicationJSON] = field(default=None)
    delete_annotation_layer_pk_annotation_422_application_json_object: Optional[DeleteAnnotationLayerPkAnnotation422ApplicationJSON] = field(default=None)
    delete_annotation_layer_pk_annotation_500_application_json_object: Optional[DeleteAnnotationLayerPkAnnotation500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
