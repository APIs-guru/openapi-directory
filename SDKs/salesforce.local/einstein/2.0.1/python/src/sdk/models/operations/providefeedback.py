from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProvideFeedbackRequestBody:
    document: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'document' }})
    expected_label: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'expectedLabel' }})
    model_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'modelId' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclass
class ProvideFeedbackSecurity:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ProvideFeedbackRequest:
    request: Optional[ProvideFeedbackRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ProvideFeedbackSecurity = field(default=None)
    

@dataclass
class ProvideFeedbackResponse:
    content_type: str = field(default=None)
    example: Optional[shared.Example] = field(default=None)
    status_code: int = field(default=None)
    
