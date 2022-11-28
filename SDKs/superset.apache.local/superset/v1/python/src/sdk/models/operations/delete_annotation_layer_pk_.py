from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteAnnotationLayerPkPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAnnotationLayerPkSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPk200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayerPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class DeleteAnnotationLayerPkRequest:
    path_params: DeleteAnnotationLayerPkPathParams = field()
    security: DeleteAnnotationLayerPkSecurity = field()
    

@dataclass
class DeleteAnnotationLayerPkResponse:
    content_type: str = field()
    status_code: int = field()
    delete_annotation_layer_pk_200_application_json_object: Optional[DeleteAnnotationLayerPk200ApplicationJSON] = field(default=None)
    delete_annotation_layer_pk_404_application_json_object: Optional[DeleteAnnotationLayerPk404ApplicationJSON] = field(default=None)
    delete_annotation_layer_pk_422_application_json_object: Optional[DeleteAnnotationLayerPk422ApplicationJSON] = field(default=None)
    delete_annotation_layer_pk_500_application_json_object: Optional[DeleteAnnotationLayerPk500ApplicationJSON] = field(default=None)
    
