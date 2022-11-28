from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutDatasetPkRefreshPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDatasetPkRefreshSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PutDatasetPkRefresh200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutDatasetPkRefresh401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutDatasetPkRefresh403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutDatasetPkRefresh404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutDatasetPkRefresh422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutDatasetPkRefresh500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PutDatasetPkRefreshRequest:
    path_params: PutDatasetPkRefreshPathParams = field()
    security: PutDatasetPkRefreshSecurity = field()
    

@dataclass
class PutDatasetPkRefreshResponse:
    content_type: str = field()
    status_code: int = field()
    put_dataset_pk_refresh_200_application_json_object: Optional[PutDatasetPkRefresh200ApplicationJSON] = field(default=None)
    put_dataset_pk_refresh_401_application_json_object: Optional[PutDatasetPkRefresh401ApplicationJSON] = field(default=None)
    put_dataset_pk_refresh_403_application_json_object: Optional[PutDatasetPkRefresh403ApplicationJSON] = field(default=None)
    put_dataset_pk_refresh_404_application_json_object: Optional[PutDatasetPkRefresh404ApplicationJSON] = field(default=None)
    put_dataset_pk_refresh_422_application_json_object: Optional[PutDatasetPkRefresh422ApplicationJSON] = field(default=None)
    put_dataset_pk_refresh_500_application_json_object: Optional[PutDatasetPkRefresh500ApplicationJSON] = field(default=None)
    
