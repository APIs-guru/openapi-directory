import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SongApiDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SongApiDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class SongApiDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SongApiDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: SongApiDeleteQueryParams;
}


export class SongApiDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
