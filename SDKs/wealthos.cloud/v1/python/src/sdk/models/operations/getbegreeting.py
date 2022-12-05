from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetBeGreetingSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetBeGreetingRequest:
    security: GetBeGreetingSecurity = field()
    

@dataclass
class GetBeGreetingResponse:
    content_type: str = field()
    status_code: int = field()
    get_be_greeting_200_application_json_any: Optional[Any] = field(default=None)
    get_be_greeting_403_application_json_any: Optional[Any] = field(default=None)
    get_be_greeting_429_application_json_any: Optional[Any] = field(default=None)
    get_be_greeting_500_application_json_any: Optional[Any] = field(default=None)
    
