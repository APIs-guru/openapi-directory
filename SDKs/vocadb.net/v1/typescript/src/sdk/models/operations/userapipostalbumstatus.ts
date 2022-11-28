import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserApiPostAlbumStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=albumId" })
  albumId: number;
}

export enum UserApiPostAlbumStatusCollectionStatusEnum {
    Nothing = "Nothing",
    Wishlisted = "Wishlisted",
    Ordered = "Ordered",
    Owned = "Owned"
}

export enum UserApiPostAlbumStatusMediaTypeEnum {
    PhysicalDisc = "PhysicalDisc",
    DigitalDownload = "DigitalDownload",
    Other = "Other"
}


export class UserApiPostAlbumStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=collectionStatus" })
  collectionStatus: UserApiPostAlbumStatusCollectionStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaType" })
  mediaType: UserApiPostAlbumStatusMediaTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating: number;
}


export class UserApiPostAlbumStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiPostAlbumStatusPathParams;

  @SpeakeasyMetadata()
  queryParams: UserApiPostAlbumStatusQueryParams;
}


export class UserApiPostAlbumStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userApiPostAlbumStatus200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  userApiPostAlbumStatus200ApplicationJavascriptString?: string;

  @SpeakeasyMetadata()
  userApiPostAlbumStatus200ApplicationJsonpString?: string;

  @SpeakeasyMetadata()
  userApiPostAlbumStatus200ApplicationXmlString?: string;

  @SpeakeasyMetadata()
  userApiPostAlbumStatus200TextJsonString?: string;

  @SpeakeasyMetadata()
  userApiPostAlbumStatus200TextJavascriptString?: string;

  @SpeakeasyMetadata()
  userApiPostAlbumStatus200TextXmlString?: string;
}
