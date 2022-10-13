from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostDatasetSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostDatasetRequest:
    request: shared.DatasetRestAPIPost = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostDatasetSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostDataset201ApplicationJSON:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: Optional[shared.DatasetRestAPIPost] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class PostDataset400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostDataset401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostDataset422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostDataset500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostDatasetResponse:
    content_type: str = field(default=None)
    post_dataset_201_application_json_object: Optional[PostDataset201ApplicationJSON] = field(default=None)
    post_dataset_400_application_json_object: Optional[PostDataset400ApplicationJSON] = field(default=None)
    post_dataset_401_application_json_object: Optional[PostDataset401ApplicationJSON] = field(default=None)
    post_dataset_422_application_json_object: Optional[PostDataset422ApplicationJSON] = field(default=None)
    post_dataset_500_application_json_object: Optional[PostDataset500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
