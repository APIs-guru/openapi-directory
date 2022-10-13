from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostAnnotationLayerPkAnnotationPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAnnotationLayerPkAnnotationSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostAnnotationLayerPkAnnotationRequest:
    path_params: PostAnnotationLayerPkAnnotationPathParams = field(default=None)
    request: shared.AnnotationRestAPIPost = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostAnnotationLayerPkAnnotationSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostAnnotationLayerPkAnnotation201ApplicationJSON:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: Optional[shared.AnnotationRestAPIPost] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class PostAnnotationLayerPkAnnotation400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostAnnotationLayerPkAnnotation401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostAnnotationLayerPkAnnotation404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostAnnotationLayerPkAnnotation500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostAnnotationLayerPkAnnotationResponse:
    content_type: str = field(default=None)
    post_annotation_layer_pk_annotation_201_application_json_object: Optional[PostAnnotationLayerPkAnnotation201ApplicationJSON] = field(default=None)
    post_annotation_layer_pk_annotation_400_application_json_object: Optional[PostAnnotationLayerPkAnnotation400ApplicationJSON] = field(default=None)
    post_annotation_layer_pk_annotation_401_application_json_object: Optional[PostAnnotationLayerPkAnnotation401ApplicationJSON] = field(default=None)
    post_annotation_layer_pk_annotation_404_application_json_object: Optional[PostAnnotationLayerPkAnnotation404ApplicationJSON] = field(default=None)
    post_annotation_layer_pk_annotation_500_application_json_object: Optional[PostAnnotationLayerPkAnnotation500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
