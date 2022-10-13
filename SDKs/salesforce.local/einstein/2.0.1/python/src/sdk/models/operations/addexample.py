from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddExamplePathParams:
    dataset_id: str = field(default=None, metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddExampleRequestBody:
    data: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'data' }})
    label_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'labelId' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclass
class AddExampleSecurity:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AddExampleRequest:
    path_params: AddExamplePathParams = field(default=None)
    request: Optional[AddExampleRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: AddExampleSecurity = field(default=None)
    

@dataclass
class AddExampleResponse:
    content_type: str = field(default=None)
    example: Optional[shared.Example] = field(default=None)
    status_code: int = field(default=None)
    
