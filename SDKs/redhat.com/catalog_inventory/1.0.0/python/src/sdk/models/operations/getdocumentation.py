from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDocumentationResponse:
    content_type: str = field()
    status_code: int = field()
    get_documentation_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
