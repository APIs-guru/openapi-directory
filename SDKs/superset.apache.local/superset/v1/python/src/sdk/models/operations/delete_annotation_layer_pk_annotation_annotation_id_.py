from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteAnnotationLayerPkAnnotationAnnotationIDPathParams:
    annotation_id: int = field(metadata={'path_param': { 'field_name': 'annotation_id', 'style': 'simple', 'explode': False }})
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAnnotationLayerPkAnnotationAnnotationIDSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPkAnnotationAnnotationID200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPkAnnotationAnnotationID404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPkAnnotationAnnotationID422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPkAnnotationAnnotationID500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class DeleteAnnotationLayerPkAnnotationAnnotationIDRequest:
    path_params: DeleteAnnotationLayerPkAnnotationAnnotationIDPathParams = field()
    security: DeleteAnnotationLayerPkAnnotationAnnotationIDSecurity = field()
    

@dataclass
class DeleteAnnotationLayerPkAnnotationAnnotationIDResponse:
    content_type: str = field()
    status_code: int = field()
    delete_annotation_layer_pk_annotation_annotation_id_200_application_json_object: Optional[DeleteAnnotationLayerPkAnnotationAnnotationID200ApplicationJSON] = field(default=None)
    delete_annotation_layer_pk_annotation_annotation_id_404_application_json_object: Optional[DeleteAnnotationLayerPkAnnotationAnnotationID404ApplicationJSON] = field(default=None)
    delete_annotation_layer_pk_annotation_annotation_id_422_application_json_object: Optional[DeleteAnnotationLayerPkAnnotationAnnotationID422ApplicationJSON] = field(default=None)
    delete_annotation_layer_pk_annotation_annotation_id_500_application_json_object: Optional[DeleteAnnotationLayerPkAnnotationAnnotationID500ApplicationJSON] = field(default=None)
    
