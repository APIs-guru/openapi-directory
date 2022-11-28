from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDatasetPkRelatedObjectsPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatasetPkRelatedObjectsSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDatasetPkRelatedObjects401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatasetPkRelatedObjects404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatasetPkRelatedObjects500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetDatasetPkRelatedObjectsRequest:
    path_params: GetDatasetPkRelatedObjectsPathParams = field()
    security: GetDatasetPkRelatedObjectsSecurity = field()
    

@dataclass
class GetDatasetPkRelatedObjectsResponse:
    content_type: str = field()
    status_code: int = field()
    dataset_related_objects_response: Optional[shared.DatasetRelatedObjectsResponse] = field(default=None)
    get_dataset_pk_related_objects_401_application_json_object: Optional[GetDatasetPkRelatedObjects401ApplicationJSON] = field(default=None)
    get_dataset_pk_related_objects_404_application_json_object: Optional[GetDatasetPkRelatedObjects404ApplicationJSON] = field(default=None)
    get_dataset_pk_related_objects_500_application_json_object: Optional[GetDatasetPkRelatedObjects500ApplicationJSON] = field(default=None)
    
