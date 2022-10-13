from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class GiftCardActivityImportReversal:
    amount_money: money.Money = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    
