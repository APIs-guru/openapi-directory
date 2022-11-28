from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse:
    content: Optional[List[FundingPayorStatusAuditResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[List[LinkForResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[PageForResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
