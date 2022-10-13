package shared

type CalculateOrderRequest struct {
	Order           Order         `json:"order"`
	ProposedRewards []OrderReward `json:"proposed_rewards"`
}
