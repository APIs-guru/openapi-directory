from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostDatasetSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PostDataset201ApplicationJSON:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: Optional[shared.DatasetRestAPIPost] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class PostDataset400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDataset401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDataset422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDataset500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostDatasetRequest:
    request: shared.DatasetRestAPIPost = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostDatasetSecurity = field()
    

@dataclass
class PostDatasetResponse:
    content_type: str = field()
    status_code: int = field()
    post_dataset_201_application_json_object: Optional[PostDataset201ApplicationJSON] = field(default=None)
    post_dataset_400_application_json_object: Optional[PostDataset400ApplicationJSON] = field(default=None)
    post_dataset_401_application_json_object: Optional[PostDataset401ApplicationJSON] = field(default=None)
    post_dataset_422_application_json_object: Optional[PostDataset422ApplicationJSON] = field(default=None)
    post_dataset_500_application_json_object: Optional[PostDataset500ApplicationJSON] = field(default=None)
    
