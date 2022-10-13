from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IncomeVerificationDocumentsDownloadRequest:
    request: shared.IncomeVerificationDocumentsDownloadRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IncomeVerificationDocumentsDownloadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    income_verification_documents_download_200_application_zip_binary_string: Optional[bytes] = field(default=None)
    
