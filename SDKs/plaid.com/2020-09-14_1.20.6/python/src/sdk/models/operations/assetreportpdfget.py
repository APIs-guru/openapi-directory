from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AssetReportPdfGetRequest:
    request: shared.AssetReportPdfGetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssetReportPdfGetResponse:
    asset_report_pdf_get_response: Optional[bytes] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
