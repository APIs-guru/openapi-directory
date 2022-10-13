from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fundingpayorstatusauditresponse
from . import linkforresponse
from . import pageforresponse


@dataclass_json
@dataclass
class PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse:
    content: Optional[List[fundingpayorstatusauditresponse.FundingPayorStatusAuditResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    links: Optional[List[linkforresponse.LinkForResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    page: Optional[pageforresponse.PageForResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    
