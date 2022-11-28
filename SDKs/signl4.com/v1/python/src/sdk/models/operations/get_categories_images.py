from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCategoriesImagesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    get_categories_images_200_application_json_strings: Optional[List[str]] = field(default=None)
    get_categories_images_200_text_json_strings: Optional[List[str]] = field(default=None)
    
