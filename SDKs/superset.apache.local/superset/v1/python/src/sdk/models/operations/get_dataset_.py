from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDatasetQueryParams:
    q: Optional[shared.GetListSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDatasetSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDataset200ApplicationJSONDescriptionColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetDataset200ApplicationJSONLabelColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetDataset200ApplicationJSON:
    count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    description_columns: Optional[GetDataset200ApplicationJSONDescriptionColumns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_columns') }})
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    label_columns: Optional[GetDataset200ApplicationJSONLabelColumns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_columns') }})
    list_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list_columns') }})
    list_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list_title') }})
    order_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_columns') }})
    result: Optional[List[shared.DatasetRestAPIGetList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class GetDataset400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDataset401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDataset422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDataset500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetDatasetRequest:
    query_params: GetDatasetQueryParams = field()
    security: GetDatasetSecurity = field()
    

@dataclass
class GetDatasetResponse:
    content_type: str = field()
    status_code: int = field()
    get_dataset_200_application_json_object: Optional[GetDataset200ApplicationJSON] = field(default=None)
    get_dataset_400_application_json_object: Optional[GetDataset400ApplicationJSON] = field(default=None)
    get_dataset_401_application_json_object: Optional[GetDataset401ApplicationJSON] = field(default=None)
    get_dataset_422_application_json_object: Optional[GetDataset422ApplicationJSON] = field(default=None)
    get_dataset_500_application_json_object: Optional[GetDataset500ApplicationJSON] = field(default=None)
    
