import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AlbumApiDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class AlbumApiDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class AlbumApiDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AlbumApiDeletePathParams;

  @Metadata()
  queryParams: AlbumApiDeleteQueryParams;
}


export class AlbumApiDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
