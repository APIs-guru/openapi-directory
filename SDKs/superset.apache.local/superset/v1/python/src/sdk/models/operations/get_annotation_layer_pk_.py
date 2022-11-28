from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetAnnotationLayerPkPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnnotationLayerPkQueryParams:
    q: Optional[shared.GetItemSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetAnnotationLayerPkSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerPk200ApplicationJSONDescriptionColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerPk200ApplicationJSONLabelColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerPk200ApplicationJSON:
    description_columns: Optional[GetAnnotationLayerPk200ApplicationJSONDescriptionColumns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_columns') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label_columns: Optional[GetAnnotationLayerPk200ApplicationJSONLabelColumns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_columns') }})
    result: Optional[shared.AnnotationLayerRestAPIGet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    show_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_columns') }})
    show_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_title') }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerPk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerPk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetAnnotationLayerPkRequest:
    path_params: GetAnnotationLayerPkPathParams = field()
    query_params: GetAnnotationLayerPkQueryParams = field()
    security: GetAnnotationLayerPkSecurity = field()
    

@dataclass
class GetAnnotationLayerPkResponse:
    content_type: str = field()
    status_code: int = field()
    get_annotation_layer_pk_200_application_json_object: Optional[GetAnnotationLayerPk200ApplicationJSON] = field(default=None)
    get_annotation_layer_pk_400_application_json_object: Optional[GetAnnotationLayerPk400ApplicationJSON] = field(default=None)
    get_annotation_layer_pk_401_application_json_object: Optional[GetAnnotationLayerPk401ApplicationJSON] = field(default=None)
    get_annotation_layer_pk_404_application_json_object: Optional[GetAnnotationLayerPk404ApplicationJSON] = field(default=None)
    get_annotation_layer_pk_422_application_json_object: Optional[GetAnnotationLayerPk422ApplicationJSON] = field(default=None)
    get_annotation_layer_pk_500_application_json_object: Optional[GetAnnotationLayerPk500ApplicationJSON] = field(default=None)
    
