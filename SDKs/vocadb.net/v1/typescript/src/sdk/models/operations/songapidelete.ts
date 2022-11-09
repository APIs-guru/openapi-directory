import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SongApiDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SongApiDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class SongApiDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SongApiDeletePathParams;

  @Metadata()
  queryParams: SongApiDeleteQueryParams;
}


export class SongApiDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
