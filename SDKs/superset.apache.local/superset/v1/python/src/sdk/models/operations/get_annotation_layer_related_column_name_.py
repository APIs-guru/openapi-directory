from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetAnnotationLayerRelatedColumnNamePathParams:
    column_name: str = field(default=None, metadata={'path_param': { 'field_name': 'column_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnnotationLayerRelatedColumnNameQueryParams:
    q: Optional[shared.GetRelatedSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetAnnotationLayerRelatedColumnNameSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAnnotationLayerRelatedColumnNameRequest:
    path_params: GetAnnotationLayerRelatedColumnNamePathParams = field(default=None)
    query_params: GetAnnotationLayerRelatedColumnNameQueryParams = field(default=None)
    security: GetAnnotationLayerRelatedColumnNameSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetAnnotationLayerRelatedColumnName400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerRelatedColumnName401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerRelatedColumnName404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAnnotationLayerRelatedColumnName500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetAnnotationLayerRelatedColumnNameResponse:
    content_type: str = field(default=None)
    get_annotation_layer_related_column_name_400_application_json_object: Optional[GetAnnotationLayerRelatedColumnName400ApplicationJSON] = field(default=None)
    get_annotation_layer_related_column_name_401_application_json_object: Optional[GetAnnotationLayerRelatedColumnName401ApplicationJSON] = field(default=None)
    get_annotation_layer_related_column_name_404_application_json_object: Optional[GetAnnotationLayerRelatedColumnName404ApplicationJSON] = field(default=None)
    get_annotation_layer_related_column_name_500_application_json_object: Optional[GetAnnotationLayerRelatedColumnName500ApplicationJSON] = field(default=None)
    related_response_schema: Optional[shared.RelatedResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
