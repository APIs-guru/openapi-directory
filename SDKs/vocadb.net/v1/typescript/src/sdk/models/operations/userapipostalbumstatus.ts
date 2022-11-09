import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserApiPostAlbumStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=albumId" })
  albumId: number;
}

export enum UserApiPostAlbumStatusCollectionStatusEnum {
    Nothing = "Nothing"
,    Wishlisted = "Wishlisted"
,    Ordered = "Ordered"
,    Owned = "Owned"
}

export enum UserApiPostAlbumStatusMediaTypeEnum {
    PhysicalDisc = "PhysicalDisc"
,    DigitalDownload = "DigitalDownload"
,    Other = "Other"
}


export class UserApiPostAlbumStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=collectionStatus" })
  collectionStatus: UserApiPostAlbumStatusCollectionStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mediaType" })
  mediaType: UserApiPostAlbumStatusMediaTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating: number;
}


export class UserApiPostAlbumStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiPostAlbumStatusPathParams;

  @Metadata()
  queryParams: UserApiPostAlbumStatusQueryParams;
}


export class UserApiPostAlbumStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userApiPostAlbumStatus200ApplicationJsonString?: string;

  @Metadata()
  userApiPostAlbumStatus200ApplicationJavascriptString?: string;

  @Metadata()
  userApiPostAlbumStatus200ApplicationJsonpString?: string;

  @Metadata()
  userApiPostAlbumStatus200ApplicationXmlString?: string;

  @Metadata()
  userApiPostAlbumStatus200TextJsonString?: string;

  @Metadata()
  userApiPostAlbumStatus200TextJavascriptString?: string;

  @Metadata()
  userApiPostAlbumStatus200TextXmlString?: string;
}
