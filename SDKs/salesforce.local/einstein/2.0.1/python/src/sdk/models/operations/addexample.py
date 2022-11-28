from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddExamplePathParams:
    dataset_id: str = field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddExampleRequestBody:
    data: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'data' }})
    label_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'labelId' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclass
class AddExampleSecurity:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AddExampleRequest:
    path_params: AddExamplePathParams = field()
    security: AddExampleSecurity = field()
    request: Optional[AddExampleRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class AddExampleResponse:
    content_type: str = field()
    status_code: int = field()
    example: Optional[shared.Example] = field(default=None)
    
