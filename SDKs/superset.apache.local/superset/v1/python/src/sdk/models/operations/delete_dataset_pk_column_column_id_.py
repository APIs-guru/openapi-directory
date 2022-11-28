from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteDatasetPkColumnColumnIDPathParams:
    column_id: int = field(metadata={'path_param': { 'field_name': 'column_id', 'style': 'simple', 'explode': False }})
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDatasetPkColumnColumnIDSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteDatasetPkColumnColumnID200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDatasetPkColumnColumnID401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDatasetPkColumnColumnID403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDatasetPkColumnColumnID404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDatasetPkColumnColumnID422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDatasetPkColumnColumnID500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class DeleteDatasetPkColumnColumnIDRequest:
    path_params: DeleteDatasetPkColumnColumnIDPathParams = field()
    security: DeleteDatasetPkColumnColumnIDSecurity = field()
    

@dataclass
class DeleteDatasetPkColumnColumnIDResponse:
    content_type: str = field()
    status_code: int = field()
    delete_dataset_pk_column_column_id_200_application_json_object: Optional[DeleteDatasetPkColumnColumnID200ApplicationJSON] = field(default=None)
    delete_dataset_pk_column_column_id_401_application_json_object: Optional[DeleteDatasetPkColumnColumnID401ApplicationJSON] = field(default=None)
    delete_dataset_pk_column_column_id_403_application_json_object: Optional[DeleteDatasetPkColumnColumnID403ApplicationJSON] = field(default=None)
    delete_dataset_pk_column_column_id_404_application_json_object: Optional[DeleteDatasetPkColumnColumnID404ApplicationJSON] = field(default=None)
    delete_dataset_pk_column_column_id_422_application_json_object: Optional[DeleteDatasetPkColumnColumnID422ApplicationJSON] = field(default=None)
    delete_dataset_pk_column_column_id_500_application_json_object: Optional[DeleteDatasetPkColumnColumnID500ApplicationJSON] = field(default=None)
    
