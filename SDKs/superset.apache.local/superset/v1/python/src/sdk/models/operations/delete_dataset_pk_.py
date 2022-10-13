from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteDatasetPkPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDatasetPkSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteDatasetPkRequest:
    path_params: DeleteDatasetPkPathParams = field(default=None)
    security: DeleteDatasetPkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteDatasetPk200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDatasetPk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDatasetPk403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDatasetPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDatasetPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDatasetPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class DeleteDatasetPkResponse:
    content_type: str = field(default=None)
    delete_dataset_pk_200_application_json_object: Optional[DeleteDatasetPk200ApplicationJSON] = field(default=None)
    delete_dataset_pk_401_application_json_object: Optional[DeleteDatasetPk401ApplicationJSON] = field(default=None)
    delete_dataset_pk_403_application_json_object: Optional[DeleteDatasetPk403ApplicationJSON] = field(default=None)
    delete_dataset_pk_404_application_json_object: Optional[DeleteDatasetPk404ApplicationJSON] = field(default=None)
    delete_dataset_pk_422_application_json_object: Optional[DeleteDatasetPk422ApplicationJSON] = field(default=None)
    delete_dataset_pk_500_application_json_object: Optional[DeleteDatasetPk500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
