from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AssetReportPdfGetRequest:
    request: shared.AssetReportPdfGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssetReportPdfGetResponse:
    content_type: str = field()
    status_code: int = field()
    asset_report_pdf_get_response: Optional[bytes] = field(default=None)
    
