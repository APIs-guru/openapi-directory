from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IncomeVerificationDocumentsDownloadRequest:
    request: shared.IncomeVerificationDocumentsDownloadRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IncomeVerificationDocumentsDownloadResponse:
    content_type: str = field()
    status_code: int = field()
    income_verification_documents_download_200_application_zip_binary_string: Optional[bytes] = field(default=None)
    
