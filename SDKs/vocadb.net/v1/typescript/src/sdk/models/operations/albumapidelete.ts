import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AlbumApiDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class AlbumApiDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class AlbumApiDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AlbumApiDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: AlbumApiDeleteQueryParams;
}


export class AlbumApiDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
