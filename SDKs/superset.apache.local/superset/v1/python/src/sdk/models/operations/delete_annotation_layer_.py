from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteAnnotationLayerQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class DeleteAnnotationLayerSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteAnnotationLayerRequest:
    query_params: DeleteAnnotationLayerQueryParams = field(default=None)
    security: DeleteAnnotationLayerSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteAnnotationLayer200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayer401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayer404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayer422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteAnnotationLayer500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class DeleteAnnotationLayerResponse:
    content_type: str = field(default=None)
    delete_annotation_layer_200_application_json_object: Optional[DeleteAnnotationLayer200ApplicationJSON] = field(default=None)
    delete_annotation_layer_401_application_json_object: Optional[DeleteAnnotationLayer401ApplicationJSON] = field(default=None)
    delete_annotation_layer_404_application_json_object: Optional[DeleteAnnotationLayer404ApplicationJSON] = field(default=None)
    delete_annotation_layer_422_application_json_object: Optional[DeleteAnnotationLayer422ApplicationJSON] = field(default=None)
    delete_annotation_layer_500_application_json_object: Optional[DeleteAnnotationLayer500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
