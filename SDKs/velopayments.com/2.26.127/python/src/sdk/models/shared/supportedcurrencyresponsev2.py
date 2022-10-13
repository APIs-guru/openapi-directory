from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import supportedcurrencyv2


@dataclass_json
@dataclass
class SupportedCurrencyResponseV2:
    currencies: Optional[List[supportedcurrencyv2.SupportedCurrencyV2]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencies' }})
    
