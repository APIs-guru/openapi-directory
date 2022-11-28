from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetOpenAPISpecResponse:
    content_type: str = field()
    status_code: int = field()
    get_open_api_spec_200_application_json_string: Optional[str] = field(default=None)
    
