from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAPIPdfWkhtmltopdfRequest:
    request: Optional[shared.WkHTMLToPdfRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAPIPdfWkhtmltopdfResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_dto: Optional[shared.ErrorResponseDto] = field(default=None)
    post_api_pdf_wkhtmltopdf_200_application_pdf_binary_string: Optional[bytes] = field(default=None)
    pdf_response_dto: Optional[shared.PdfResponseDto] = field(default=None)
    
