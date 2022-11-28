import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SongListApiDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SongListApiDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hardDelete" })
  hardDelete?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class SongListApiDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SongListApiDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: SongListApiDeleteQueryParams;
}


export class SongListApiDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
