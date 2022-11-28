from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteDatasetQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class DeleteDatasetSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteDataset200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDataset400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDataset401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDataset403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDataset404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDataset422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDataset500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class DeleteDatasetRequest:
    query_params: DeleteDatasetQueryParams = field()
    security: DeleteDatasetSecurity = field()
    

@dataclass
class DeleteDatasetResponse:
    content_type: str = field()
    status_code: int = field()
    delete_dataset_200_application_json_object: Optional[DeleteDataset200ApplicationJSON] = field(default=None)
    delete_dataset_400_application_json_object: Optional[DeleteDataset400ApplicationJSON] = field(default=None)
    delete_dataset_401_application_json_object: Optional[DeleteDataset401ApplicationJSON] = field(default=None)
    delete_dataset_403_application_json_object: Optional[DeleteDataset403ApplicationJSON] = field(default=None)
    delete_dataset_404_application_json_object: Optional[DeleteDataset404ApplicationJSON] = field(default=None)
    delete_dataset_422_application_json_object: Optional[DeleteDataset422ApplicationJSON] = field(default=None)
    delete_dataset_500_application_json_object: Optional[DeleteDataset500ApplicationJSON] = field(default=None)
    
