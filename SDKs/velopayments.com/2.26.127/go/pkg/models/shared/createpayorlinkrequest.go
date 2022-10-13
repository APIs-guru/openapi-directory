package shared

type CreatePayorLinkRequestLinkTypeEnum string

const (
	CreatePayorLinkRequestLinkTypeEnumParentOf CreatePayorLinkRequestLinkTypeEnum = "PARENT_OF"
)

type CreatePayorLinkRequest struct {
	FromPayorID string                             `json:"fromPayorId"`
	LinkType    CreatePayorLinkRequestLinkTypeEnum `json:"linkType"`
	ToPayorID   string                             `json:"toPayorId"`
}
