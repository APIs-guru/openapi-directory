package shared

type GiftCardActivity struct {
	ActivateActivityDetails               *GiftCardActivityActivate               `json:"activate_activity_details"`
	AdjustDecrementActivityDetails        *GiftCardActivityAdjustDecrement        `json:"adjust_decrement_activity_details"`
	AdjustIncrementActivityDetails        *GiftCardActivityAdjustIncrement        `json:"adjust_increment_activity_details"`
	BlockActivityDetails                  *GiftCardActivityBlock                  `json:"block_activity_details"`
	ClearBalanceActivityDetails           *GiftCardActivityClearBalance           `json:"clear_balance_activity_details"`
	CreatedAt                             *string                                 `json:"created_at"`
	DeactivateActivityDetails             *GiftCardActivityDeactivate             `json:"deactivate_activity_details"`
	GiftCardBalanceMoney                  *Money                                  `json:"gift_card_balance_money"`
	GiftCardGan                           *string                                 `json:"gift_card_gan"`
	GiftCardID                            *string                                 `json:"gift_card_id"`
	ID                                    *string                                 `json:"id"`
	ImportActivityDetails                 *GiftCardActivityImport                 `json:"import_activity_details"`
	ImportReversalActivityDetails         *GiftCardActivityImportReversal         `json:"import_reversal_activity_details"`
	LoadActivityDetails                   *GiftCardActivityLoad                   `json:"load_activity_details"`
	LocationID                            string                                  `json:"location_id"`
	RedeemActivityDetails                 *GiftCardActivityRedeem                 `json:"redeem_activity_details"`
	RefundActivityDetails                 *GiftCardActivityRefund                 `json:"refund_activity_details"`
	Type                                  interface{}                             `json:"type"`
	UnblockActivityDetails                *GiftCardActivityUnblock                `json:"unblock_activity_details"`
	UnlinkedActivityRefundActivityDetails *GiftCardActivityUnlinkedActivityRefund `json:"unlinked_activity_refund_activity_details"`
}
