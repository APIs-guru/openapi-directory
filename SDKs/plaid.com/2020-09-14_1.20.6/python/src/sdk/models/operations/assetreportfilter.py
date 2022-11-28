from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AssetReportFilterRequest:
    request: shared.AssetReportFilterRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssetReportFilterResponse:
    content_type: str = field()
    status_code: int = field()
    asset_report_filter_response: Optional[dict[str, Any]] = field(default=None)
    
