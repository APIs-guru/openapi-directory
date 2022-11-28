from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostAnnotationLayerSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PostAnnotationLayer201ApplicationJSON:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: Optional[shared.AnnotationLayerRestAPIPost] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class PostAnnotationLayer400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostAnnotationLayer401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostAnnotationLayer404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostAnnotationLayer500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostAnnotationLayerRequest:
    request: shared.AnnotationLayerRestAPIPost = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostAnnotationLayerSecurity = field()
    

@dataclass
class PostAnnotationLayerResponse:
    content_type: str = field()
    status_code: int = field()
    post_annotation_layer_201_application_json_object: Optional[PostAnnotationLayer201ApplicationJSON] = field(default=None)
    post_annotation_layer_400_application_json_object: Optional[PostAnnotationLayer400ApplicationJSON] = field(default=None)
    post_annotation_layer_401_application_json_object: Optional[PostAnnotationLayer401ApplicationJSON] = field(default=None)
    post_annotation_layer_404_application_json_object: Optional[PostAnnotationLayer404ApplicationJSON] = field(default=None)
    post_annotation_layer_500_application_json_object: Optional[PostAnnotationLayer500ApplicationJSON] = field(default=None)
    
