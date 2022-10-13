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
	Album          *AlbumForAPIContract                          `json:"album"`
	MediaType      *AlbumForUserForAPIContractMediaTypeEnum      `json:"mediaType"`
	PurchaseStatus *AlbumForUserForAPIContractPurchaseStatusEnum `json:"purchaseStatus"`
	Rating         *int32                                        `json:"rating"`
	User           *UserForAPIContract                           `json:"user"`
}
