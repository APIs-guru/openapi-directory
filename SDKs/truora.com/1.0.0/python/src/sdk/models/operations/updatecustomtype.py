from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UpdateCustomTypeSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateCustomTypeRequest:
    request: shared.CreateConfigInput = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateCustomTypeSecurity = field(default=None)
    

@dataclass
class UpdateCustomTypeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
