from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutAnnotationLayerPkAnnotationAnnotationIDPathParams:
    annotation_id: int = field(metadata={'path_param': { 'field_name': 'annotation_id', 'style': 'simple', 'explode': False }})
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAnnotationLayerPkAnnotationAnnotationIDSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PutAnnotationLayerPkAnnotationAnnotationID200ApplicationJSON:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: Optional[shared.AnnotationRestAPIPut] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class PutAnnotationLayerPkAnnotationAnnotationID400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutAnnotationLayerPkAnnotationAnnotationID401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutAnnotationLayerPkAnnotationAnnotationID404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutAnnotationLayerPkAnnotationAnnotationID500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PutAnnotationLayerPkAnnotationAnnotationIDRequest:
    path_params: PutAnnotationLayerPkAnnotationAnnotationIDPathParams = field()
    request: shared.AnnotationRestAPIPut = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutAnnotationLayerPkAnnotationAnnotationIDSecurity = field()
    

@dataclass
class PutAnnotationLayerPkAnnotationAnnotationIDResponse:
    content_type: str = field()
    status_code: int = field()
    put_annotation_layer_pk_annotation_annotation_id_200_application_json_object: Optional[PutAnnotationLayerPkAnnotationAnnotationID200ApplicationJSON] = field(default=None)
    put_annotation_layer_pk_annotation_annotation_id_400_application_json_object: Optional[PutAnnotationLayerPkAnnotationAnnotationID400ApplicationJSON] = field(default=None)
    put_annotation_layer_pk_annotation_annotation_id_401_application_json_object: Optional[PutAnnotationLayerPkAnnotationAnnotationID401ApplicationJSON] = field(default=None)
    put_annotation_layer_pk_annotation_annotation_id_404_application_json_object: Optional[PutAnnotationLayerPkAnnotationAnnotationID404ApplicationJSON] = field(default=None)
    put_annotation_layer_pk_annotation_annotation_id_500_application_json_object: Optional[PutAnnotationLayerPkAnnotationAnnotationID500ApplicationJSON] = field(default=None)
    
