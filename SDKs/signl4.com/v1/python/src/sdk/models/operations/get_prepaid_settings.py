from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPrepaidSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    prepaid_settings_info: Optional[shared.PrepaidSettingsInfo] = field(default=None)
    
