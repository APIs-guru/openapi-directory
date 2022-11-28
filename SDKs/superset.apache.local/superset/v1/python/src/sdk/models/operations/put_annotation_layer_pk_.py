from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutAnnotationLayerPkPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAnnotationLayerPkSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PutAnnotationLayerPk200ApplicationJSON:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: Optional[shared.AnnotationLayerRestAPIPut] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class PutAnnotationLayerPk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutAnnotationLayerPk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutAnnotationLayerPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutAnnotationLayerPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PutAnnotationLayerPkRequest:
    path_params: PutAnnotationLayerPkPathParams = field()
    request: shared.AnnotationLayerRestAPIPut = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutAnnotationLayerPkSecurity = field()
    

@dataclass
class PutAnnotationLayerPkResponse:
    content_type: str = field()
    status_code: int = field()
    put_annotation_layer_pk_200_application_json_object: Optional[PutAnnotationLayerPk200ApplicationJSON] = field(default=None)
    put_annotation_layer_pk_400_application_json_object: Optional[PutAnnotationLayerPk400ApplicationJSON] = field(default=None)
    put_annotation_layer_pk_401_application_json_object: Optional[PutAnnotationLayerPk401ApplicationJSON] = field(default=None)
    put_annotation_layer_pk_404_application_json_object: Optional[PutAnnotationLayerPk404ApplicationJSON] = field(default=None)
    put_annotation_layer_pk_500_application_json_object: Optional[PutAnnotationLayerPk500ApplicationJSON] = field(default=None)
    
