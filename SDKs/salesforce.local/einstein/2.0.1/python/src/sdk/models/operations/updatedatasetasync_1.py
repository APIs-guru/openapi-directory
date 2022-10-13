from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateDatasetAsync1RequestBody:
    data: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'data' }})
    model_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'modelId' }})
    

@dataclass
class UpdateDatasetAsync1Security:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateDatasetAsync1Request:
    request: Optional[UpdateDatasetAsync1RequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UpdateDatasetAsync1Security = field(default=None)
    

@dataclass
class UpdateDatasetAsync1Response:
    content_type: str = field(default=None)
    dataset: Optional[shared.Dataset] = field(default=None)
    status_code: int = field(default=None)
    
