from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssetReportGetRequest:
    asset_report_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_report_token' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    include_insights: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_insights' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
