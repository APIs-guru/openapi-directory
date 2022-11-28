import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserApiPostAlbumStatusPathParams extends SpeakeasyBase {
    albumId: number;
}
export declare enum UserApiPostAlbumStatusCollectionStatusEnum {
    Nothing = "Nothing",
    Wishlisted = "Wishlisted",
    Ordered = "Ordered",
    Owned = "Owned"
}
export declare enum UserApiPostAlbumStatusMediaTypeEnum {
    PhysicalDisc = "PhysicalDisc",
    DigitalDownload = "DigitalDownload",
    Other = "Other"
}
export declare class UserApiPostAlbumStatusQueryParams extends SpeakeasyBase {
    collectionStatus: UserApiPostAlbumStatusCollectionStatusEnum;
    mediaType: UserApiPostAlbumStatusMediaTypeEnum;
    rating: number;
}
export declare class UserApiPostAlbumStatusRequest extends SpeakeasyBase {
    pathParams: UserApiPostAlbumStatusPathParams;
    queryParams: UserApiPostAlbumStatusQueryParams;
}
export declare class UserApiPostAlbumStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userApiPostAlbumStatus200ApplicationJsonString?: string;
    userApiPostAlbumStatus200ApplicationJavascriptString?: string;
    userApiPostAlbumStatus200ApplicationJsonpString?: string;
    userApiPostAlbumStatus200ApplicationXmlString?: string;
    userApiPostAlbumStatus200TextJsonString?: string;
    userApiPostAlbumStatus200TextJavascriptString?: string;
    userApiPostAlbumStatus200TextXmlString?: string;
}
