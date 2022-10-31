package shared

type AlbumForUserForAPIContractMediaTypeEnum string

const (
	AlbumForUserForAPIContractMediaTypeEnumPhysicalDisc    AlbumForUserForAPIContractMediaTypeEnum = "PhysicalDisc"
	AlbumForUserForAPIContractMediaTypeEnumDigitalDownload AlbumForUserForAPIContractMediaTypeEnum = "DigitalDownload"
	AlbumForUserForAPIContractMediaTypeEnumOther           AlbumForUserForAPIContractMediaTypeEnum = "Other"
)

type AlbumForUserForAPIContractPurchaseStatusEnum string

const (
	AlbumForUserForAPIContractPurchaseStatusEnumNothing    AlbumForUserForAPIContractPurchaseStatusEnum = "Nothing"
	AlbumForUserForAPIContractPurchaseStatusEnumWishlisted AlbumForUserForAPIContractPurchaseStatusEnum = "Wishlisted"
	AlbumForUserForAPIContractPurchaseStatusEnumOrdered    AlbumForUserForAPIContractPurchaseStatusEnum = "Ordered"
	AlbumForUserForAPIContractPurchaseStatusEnumOwned      AlbumForUserForAPIContractPurchaseStatusEnum = "Owned"
)

type AlbumForUserForAPIContract struct {
	Album          *AlbumForAPIContract                          `json:"album,omitempty"`
	MediaType      *AlbumForUserForAPIContractMediaTypeEnum      `json:"mediaType,omitempty"`
	PurchaseStatus *AlbumForUserForAPIContractPurchaseStatusEnum `json:"purchaseStatus,omitempty"`
	Rating         *int32                                        `json:"rating,omitempty"`
	User           *UserForAPIContract                           `json:"user,omitempty"`
}
