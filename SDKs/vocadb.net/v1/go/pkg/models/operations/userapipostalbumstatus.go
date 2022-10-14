package operations

type UserAPIPostAlbumStatusPathParams struct {
	AlbumID int32 `pathParam:"style=simple,explode=false,name=albumId"`
}

type UserAPIPostAlbumStatusCollectionStatusEnum string

const (
	UserAPIPostAlbumStatusCollectionStatusEnumNothing    UserAPIPostAlbumStatusCollectionStatusEnum = "Nothing"
	UserAPIPostAlbumStatusCollectionStatusEnumWishlisted UserAPIPostAlbumStatusCollectionStatusEnum = "Wishlisted"
	UserAPIPostAlbumStatusCollectionStatusEnumOrdered    UserAPIPostAlbumStatusCollectionStatusEnum = "Ordered"
	UserAPIPostAlbumStatusCollectionStatusEnumOwned      UserAPIPostAlbumStatusCollectionStatusEnum = "Owned"
)

type UserAPIPostAlbumStatusMediaTypeEnum string

const (
	UserAPIPostAlbumStatusMediaTypeEnumPhysicalDisc    UserAPIPostAlbumStatusMediaTypeEnum = "PhysicalDisc"
	UserAPIPostAlbumStatusMediaTypeEnumDigitalDownload UserAPIPostAlbumStatusMediaTypeEnum = "DigitalDownload"
	UserAPIPostAlbumStatusMediaTypeEnumOther           UserAPIPostAlbumStatusMediaTypeEnum = "Other"
)

type UserAPIPostAlbumStatusQueryParams struct {
	CollectionStatus UserAPIPostAlbumStatusCollectionStatusEnum `queryParam:"style=form,explode=true,name=collectionStatus"`
	MediaType        UserAPIPostAlbumStatusMediaTypeEnum        `queryParam:"style=form,explode=true,name=mediaType"`
	Rating           int32                                      `queryParam:"style=form,explode=true,name=rating"`
}

type UserAPIPostAlbumStatusRequest struct {
	PathParams  UserAPIPostAlbumStatusPathParams
	QueryParams UserAPIPostAlbumStatusQueryParams
}

type UserAPIPostAlbumStatusResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	UserAPIPostAlbumStatus200ApplicationJSONString       *string
	UserAPIPostAlbumStatus200ApplicationJavascriptString *string
	UserAPIPostAlbumStatus200ApplicationJsonpString      *string
	UserAPIPostAlbumStatus200ApplicationXMLString        *string
	UserAPIPostAlbumStatus200TextJSONString              *string
	UserAPIPostAlbumStatus200TextJavascriptString        *string
	UserAPIPostAlbumStatus200TextXMLString               *string
}
