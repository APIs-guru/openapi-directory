from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteAnnotationLayerPkPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAnnotationLayerPkSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteAnnotationLayerPkRequest:
    path_params: DeleteAnnotationLayerPkPathParams = field(default=None)
    security: DeleteAnnotationLayerPkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPk200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class DeleteAnnotationLayerPkResponse:
    content_type: str = field(default=None)
    delete_annotation_layer_pk_200_application_json_object: Optional[DeleteAnnotationLayerPk200ApplicationJSON] = field(default=None)
    delete_annotation_layer_pk_404_application_json_object: Optional[DeleteAnnotationLayerPk404ApplicationJSON] = field(default=None)
    delete_annotation_layer_pk_422_application_json_object: Optional[DeleteAnnotationLayerPk422ApplicationJSON] = field(default=None)
    delete_annotation_layer_pk_500_application_json_object: Optional[DeleteAnnotationLayerPk500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
