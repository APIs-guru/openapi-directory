from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class LineMetaDisruptionCategoriesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    line_meta_disruption_categories_200_application_json_strings: Optional[List[str]] = field(default=None)
    line_meta_disruption_categories_200_text_json_strings: Optional[List[str]] = field(default=None)
    status_code: int = field(default=None)
    
