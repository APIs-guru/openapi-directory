from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QuoteResponseV3:
    fx_summaries: Optional[List[QuoteFxSummaryV3]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fxSummaries') }})
    
