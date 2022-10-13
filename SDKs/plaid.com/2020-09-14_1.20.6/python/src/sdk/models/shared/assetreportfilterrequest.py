from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssetReportFilterRequest:
    account_ids_to_exclude: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_ids_to_exclude' }})
    asset_report_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_report_token' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
