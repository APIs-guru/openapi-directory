import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GiftCardActivityActivate } from "./giftcardactivityactivate";
import { GiftCardActivityAdjustDecrement } from "./giftcardactivityadjustdecrement";
import { GiftCardActivityAdjustIncrement } from "./giftcardactivityadjustincrement";
import { GiftCardActivityBlock } from "./giftcardactivityblock";
import { GiftCardActivityClearBalance } from "./giftcardactivityclearbalance";
import { GiftCardActivityDeactivate } from "./giftcardactivitydeactivate";
import { Money } from "./money";
import { GiftCardActivityImport } from "./giftcardactivityimport";
import { GiftCardActivityImportReversal } from "./giftcardactivityimportreversal";
import { GiftCardActivityLoad } from "./giftcardactivityload";
import { GiftCardActivityRedeem } from "./giftcardactivityredeem";
import { GiftCardActivityRefund } from "./giftcardactivityrefund";
import { GiftCardActivityUnblock } from "./giftcardactivityunblock";
import { GiftCardActivityUnlinkedActivityRefund } from "./giftcardactivityunlinkedactivityrefund";


// GiftCardActivity
/** 
 * Represents an action performed on a gift card that affects its state or balance.
**/
export class GiftCardActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=activate_activity_details" })
  activateActivityDetails?: GiftCardActivityActivate;

  @Metadata({ data: "json, name=adjust_decrement_activity_details" })
  adjustDecrementActivityDetails?: GiftCardActivityAdjustDecrement;

  @Metadata({ data: "json, name=adjust_increment_activity_details" })
  adjustIncrementActivityDetails?: GiftCardActivityAdjustIncrement;

  @Metadata({ data: "json, name=block_activity_details" })
  blockActivityDetails?: GiftCardActivityBlock;

  @Metadata({ data: "json, name=clear_balance_activity_details" })
  clearBalanceActivityDetails?: GiftCardActivityClearBalance;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=deactivate_activity_details" })
  deactivateActivityDetails?: GiftCardActivityDeactivate;

  @Metadata({ data: "json, name=gift_card_balance_money" })
  giftCardBalanceMoney?: Money;

  @Metadata({ data: "json, name=gift_card_gan" })
  giftCardGan?: string;

  @Metadata({ data: "json, name=gift_card_id" })
  giftCardId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=import_activity_details" })
  importActivityDetails?: GiftCardActivityImport;

  @Metadata({ data: "json, name=import_reversal_activity_details" })
  importReversalActivityDetails?: GiftCardActivityImportReversal;

  @Metadata({ data: "json, name=load_activity_details" })
  loadActivityDetails?: GiftCardActivityLoad;

  @Metadata({ data: "json, name=location_id" })
  locationId: string;

  @Metadata({ data: "json, name=redeem_activity_details" })
  redeemActivityDetails?: GiftCardActivityRedeem;

  @Metadata({ data: "json, name=refund_activity_details" })
  refundActivityDetails?: GiftCardActivityRefund;

  @Metadata({ data: "json, name=type" })
  type: any;

  @Metadata({ data: "json, name=unblock_activity_details" })
  unblockActivityDetails?: GiftCardActivityUnblock;

  @Metadata({ data: "json, name=unlinked_activity_refund_activity_details" })
  unlinkedActivityRefundActivityDetails?: GiftCardActivityUnlinkedActivityRefund;
}
