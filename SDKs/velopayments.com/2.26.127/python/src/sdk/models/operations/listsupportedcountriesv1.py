from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListSupportedCountriesV1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    supported_countries_response: Optional[shared.SupportedCountriesResponse] = field(default=None)
    
