from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import assetreportrefreshrequestoptions


@dataclass_json
@dataclass
class AssetReportRefreshRequest:
    asset_report_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_report_token' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    days_requested: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'days_requested' }})
    options: Optional[assetreportrefreshrequestoptions.AssetReportRefreshRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
