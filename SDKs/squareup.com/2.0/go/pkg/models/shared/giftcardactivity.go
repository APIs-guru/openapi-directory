package shared

type GiftCardActivity struct {
	ActivateActivityDetails               *GiftCardActivityActivate               `json:"activate_activity_details,omitempty"`
	AdjustDecrementActivityDetails        *GiftCardActivityAdjustDecrement        `json:"adjust_decrement_activity_details,omitempty"`
	AdjustIncrementActivityDetails        *GiftCardActivityAdjustIncrement        `json:"adjust_increment_activity_details,omitempty"`
	BlockActivityDetails                  *GiftCardActivityBlock                  `json:"block_activity_details,omitempty"`
	ClearBalanceActivityDetails           *GiftCardActivityClearBalance           `json:"clear_balance_activity_details,omitempty"`
	CreatedAt                             *string                                 `json:"created_at,omitempty"`
	DeactivateActivityDetails             *GiftCardActivityDeactivate             `json:"deactivate_activity_details,omitempty"`
	GiftCardBalanceMoney                  *Money                                  `json:"gift_card_balance_money,omitempty"`
	GiftCardGan                           *string                                 `json:"gift_card_gan,omitempty"`
	GiftCardID                            *string                                 `json:"gift_card_id,omitempty"`
	ID                                    *string                                 `json:"id,omitempty"`
	ImportActivityDetails                 *GiftCardActivityImport                 `json:"import_activity_details,omitempty"`
	ImportReversalActivityDetails         *GiftCardActivityImportReversal         `json:"import_reversal_activity_details,omitempty"`
	LoadActivityDetails                   *GiftCardActivityLoad                   `json:"load_activity_details,omitempty"`
	LocationID                            string                                  `json:"location_id"`
	RedeemActivityDetails                 *GiftCardActivityRedeem                 `json:"redeem_activity_details,omitempty"`
	RefundActivityDetails                 *GiftCardActivityRefund                 `json:"refund_activity_details,omitempty"`
	Type                                  interface{}                             `json:"type"`
	UnblockActivityDetails                *GiftCardActivityUnblock                `json:"unblock_activity_details,omitempty"`
	UnlinkedActivityRefundActivityDetails *GiftCardActivityUnlinkedActivityRefund `json:"unlinked_activity_refund_activity_details,omitempty"`
}
