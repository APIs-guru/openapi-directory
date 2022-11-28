from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssetReportCreateRequest:
    r"""AssetReportCreateRequest
    AssetReportCreateRequest defines the request schema for `/asset_report/create`
    """
    
    access_tokens: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_tokens') }})
    days_requested: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('days_requested') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    options: Optional[AssetReportCreateRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
