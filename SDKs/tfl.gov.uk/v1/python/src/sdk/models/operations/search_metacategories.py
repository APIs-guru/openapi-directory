from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class SearchMetaCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    search_meta_categories_200_application_json_strings: Optional[List[str]] = field(default=None)
    search_meta_categories_200_text_json_strings: Optional[List[str]] = field(default=None)
    
