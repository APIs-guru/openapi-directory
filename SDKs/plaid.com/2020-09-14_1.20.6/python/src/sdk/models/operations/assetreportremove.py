from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AssetReportRemoveRequest:
    request: shared.AssetReportRemoveRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssetReportRemoveResponse:
    content_type: str = field()
    status_code: int = field()
    asset_report_remove_response: Optional[dict[str, Any]] = field(default=None)
    
