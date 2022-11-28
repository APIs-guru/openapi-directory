from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssetReportFilterRequest:
    r"""AssetReportFilterRequest
    AssetReportFilterRequest defines the request schema for `/asset_report/filter`
    """
    
    account_ids_to_exclude: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_ids_to_exclude') }})
    asset_report_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_report_token') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
