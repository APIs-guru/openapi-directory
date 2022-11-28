from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutDatasetPkPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDatasetPkQueryParams:
    override_columns: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'override_columns', 'style': 'form', 'explode': True }})
    

@dataclass
class PutDatasetPkSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PutDatasetPk200ApplicationJSON:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: Optional[shared.DatasetRestAPIPut] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class PutDatasetPk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutDatasetPk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutDatasetPk403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutDatasetPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutDatasetPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutDatasetPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PutDatasetPkRequest:
    path_params: PutDatasetPkPathParams = field()
    query_params: PutDatasetPkQueryParams = field()
    request: shared.DatasetRestAPIPut = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutDatasetPkSecurity = field()
    

@dataclass
class PutDatasetPkResponse:
    content_type: str = field()
    status_code: int = field()
    put_dataset_pk_200_application_json_object: Optional[PutDatasetPk200ApplicationJSON] = field(default=None)
    put_dataset_pk_400_application_json_object: Optional[PutDatasetPk400ApplicationJSON] = field(default=None)
    put_dataset_pk_401_application_json_object: Optional[PutDatasetPk401ApplicationJSON] = field(default=None)
    put_dataset_pk_403_application_json_object: Optional[PutDatasetPk403ApplicationJSON] = field(default=None)
    put_dataset_pk_404_application_json_object: Optional[PutDatasetPk404ApplicationJSON] = field(default=None)
    put_dataset_pk_422_application_json_object: Optional[PutDatasetPk422ApplicationJSON] = field(default=None)
    put_dataset_pk_500_application_json_object: Optional[PutDatasetPk500ApplicationJSON] = field(default=None)
    
