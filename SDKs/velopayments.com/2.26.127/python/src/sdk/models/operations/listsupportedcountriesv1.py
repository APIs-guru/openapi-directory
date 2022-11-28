from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListSupportedCountriesV1Response:
    content_type: str = field()
    status_code: int = field()
    supported_countries_response: Optional[shared.SupportedCountriesResponse] = field(default=None)
    
