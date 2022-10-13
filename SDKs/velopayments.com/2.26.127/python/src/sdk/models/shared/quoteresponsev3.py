from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import quotefxsummaryv3


@dataclass_json
@dataclass
class QuoteResponseV3:
    fx_summaries: Optional[List[quotefxsummaryv3.QuoteFxSummaryV3]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fxSummaries' }})
    
