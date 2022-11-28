from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProvideFeedback1RequestBody:
    data: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'data' }})
    expected_label: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'expectedLabel' }})
    model_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'modelId' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclass
class ProvideFeedback1Security:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ProvideFeedback1Request:
    security: ProvideFeedback1Security = field()
    request: Optional[ProvideFeedback1RequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class ProvideFeedback1Response:
    content_type: str = field()
    status_code: int = field()
    example: Optional[shared.Example] = field(default=None)
    
