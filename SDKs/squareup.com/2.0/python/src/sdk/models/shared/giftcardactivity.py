from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import giftcardactivityactivate
from . import giftcardactivityadjustdecrement
from . import giftcardactivityadjustincrement
from . import giftcardactivityblock
from . import giftcardactivityclearbalance
from . import giftcardactivitydeactivate
from . import money
from . import giftcardactivityimport
from . import giftcardactivityimportreversal
from . import giftcardactivityload
from . import giftcardactivityredeem
from . import giftcardactivityrefund
from . import giftcardactivityunblock
from . import giftcardactivityunlinkedactivityrefund


@dataclass_json
@dataclass
class GiftCardActivity:
    activate_activity_details: Optional[giftcardactivityactivate.GiftCardActivityActivate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activate_activity_details' }})
    adjust_decrement_activity_details: Optional[giftcardactivityadjustdecrement.GiftCardActivityAdjustDecrement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adjust_decrement_activity_details' }})
    adjust_increment_activity_details: Optional[giftcardactivityadjustincrement.GiftCardActivityAdjustIncrement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adjust_increment_activity_details' }})
    block_activity_details: Optional[giftcardactivityblock.GiftCardActivityBlock] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'block_activity_details' }})
    clear_balance_activity_details: Optional[giftcardactivityclearbalance.GiftCardActivityClearBalance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clear_balance_activity_details' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    deactivate_activity_details: Optional[giftcardactivitydeactivate.GiftCardActivityDeactivate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deactivate_activity_details' }})
    gift_card_balance_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gift_card_balance_money' }})
    gift_card_gan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gift_card_gan' }})
    gift_card_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gift_card_id' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    import_activity_details: Optional[giftcardactivityimport.GiftCardActivityImport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'import_activity_details' }})
    import_reversal_activity_details: Optional[giftcardactivityimportreversal.GiftCardActivityImportReversal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'import_reversal_activity_details' }})
    load_activity_details: Optional[giftcardactivityload.GiftCardActivityLoad] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_activity_details' }})
    location_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    redeem_activity_details: Optional[giftcardactivityredeem.GiftCardActivityRedeem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redeem_activity_details' }})
    refund_activity_details: Optional[giftcardactivityrefund.GiftCardActivityRefund] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refund_activity_details' }})
    type: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    unblock_activity_details: Optional[giftcardactivityunblock.GiftCardActivityUnblock] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unblock_activity_details' }})
    unlinked_activity_refund_activity_details: Optional[giftcardactivityunlinkedactivityrefund.GiftCardActivityUnlinkedActivityRefund] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unlinked_activity_refund_activity_details' }})
    
