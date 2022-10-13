from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteAnnotationLayerPkAnnotationAnnotationIDPathParams:
    annotation_id: int = field(default=None, metadata={'path_param': { 'field_name': 'annotation_id', 'style': 'simple', 'explode': False }})
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAnnotationLayerPkAnnotationAnnotationIDSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteAnnotationLayerPkAnnotationAnnotationIDRequest:
    path_params: DeleteAnnotationLayerPkAnnotationAnnotationIDPathParams = field(default=None)
    security: DeleteAnnotationLayerPkAnnotationAnnotationIDSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPkAnnotationAnnotationID200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPkAnnotationAnnotationID404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPkAnnotationAnnotationID422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPkAnnotationAnnotationID500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class DeleteAnnotationLayerPkAnnotationAnnotationIDResponse:
    content_type: str = field(default=None)
    delete_annotation_layer_pk_annotation_annotation_id_200_application_json_object: Optional[DeleteAnnotationLayerPkAnnotationAnnotationID200ApplicationJSON] = field(default=None)
    delete_annotation_layer_pk_annotation_annotation_id_404_application_json_object: Optional[DeleteAnnotationLayerPkAnnotationAnnotationID404ApplicationJSON] = field(default=None)
    delete_annotation_layer_pk_annotation_annotation_id_422_application_json_object: Optional[DeleteAnnotationLayerPkAnnotationAnnotationID422ApplicationJSON] = field(default=None)
    delete_annotation_layer_pk_annotation_annotation_id_500_application_json_object: Optional[DeleteAnnotationLayerPkAnnotationAnnotationID500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
