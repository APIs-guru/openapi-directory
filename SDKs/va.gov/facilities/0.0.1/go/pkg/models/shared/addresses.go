package shared

type Addresses struct {
	Mailing  *Address `json:"mailing"`
	Physical *Address `json:"physical"`
}
