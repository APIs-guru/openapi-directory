from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CategoriesGetRequest:
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CategoriesGetResponse:
    content_type: str = field()
    status_code: int = field()
    categories_get_response: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
