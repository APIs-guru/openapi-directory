from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListSupportedCountriesV2Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    supported_countries_response_v2: Optional[shared.SupportedCountriesResponseV2] = field(default=None)
    
