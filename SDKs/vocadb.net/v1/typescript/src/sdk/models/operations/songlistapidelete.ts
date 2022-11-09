import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SongListApiDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SongListApiDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=hardDelete" })
  hardDelete?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class SongListApiDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SongListApiDeletePathParams;

  @Metadata()
  queryParams: SongListApiDeleteQueryParams;
}


export class SongListApiDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
