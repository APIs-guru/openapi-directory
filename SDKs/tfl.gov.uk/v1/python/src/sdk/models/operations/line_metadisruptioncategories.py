from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class LineMetaDisruptionCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    line_meta_disruption_categories_200_application_json_strings: Optional[List[str]] = field(default=None)
    line_meta_disruption_categories_200_text_json_strings: Optional[List[str]] = field(default=None)
    
