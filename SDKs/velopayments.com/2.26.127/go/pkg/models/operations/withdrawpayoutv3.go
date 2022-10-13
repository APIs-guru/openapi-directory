package operations

type WithdrawPayoutV3PathParams struct {
	PayoutID string `pathParam:"style=simple,explode=false,name=payoutId"`
}

type WithdrawPayoutV3Request struct {
	PathParams WithdrawPayoutV3PathParams
}

type WithdrawPayoutV3Response struct {
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
}
