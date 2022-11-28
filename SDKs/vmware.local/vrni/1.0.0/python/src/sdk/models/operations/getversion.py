from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVersionSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetVersionRequest:
    security: GetVersionSecurity = field()
    

@dataclass
class GetVersionResponse:
    content_type: str = field()
    status_code: int = field()
    version_response: Optional[shared.VersionResponse] = field(default=None)
    
