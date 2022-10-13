from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutAnnotationLayerPkPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAnnotationLayerPkSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PutAnnotationLayerPkRequest:
    path_params: PutAnnotationLayerPkPathParams = field(default=None)
    request: shared.AnnotationLayerRestAPIPut = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutAnnotationLayerPkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PutAnnotationLayerPk200ApplicationJSON:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: Optional[shared.AnnotationLayerRestAPIPut] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class PutAnnotationLayerPk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutAnnotationLayerPk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutAnnotationLayerPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutAnnotationLayerPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PutAnnotationLayerPkResponse:
    content_type: str = field(default=None)
    put_annotation_layer_pk_200_application_json_object: Optional[PutAnnotationLayerPk200ApplicationJSON] = field(default=None)
    put_annotation_layer_pk_400_application_json_object: Optional[PutAnnotationLayerPk400ApplicationJSON] = field(default=None)
    put_annotation_layer_pk_401_application_json_object: Optional[PutAnnotationLayerPk401ApplicationJSON] = field(default=None)
    put_annotation_layer_pk_404_application_json_object: Optional[PutAnnotationLayerPk404ApplicationJSON] = field(default=None)
    put_annotation_layer_pk_500_application_json_object: Optional[PutAnnotationLayerPk500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
