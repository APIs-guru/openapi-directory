import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ArtistApiDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ArtistApiDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class ArtistApiDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ArtistApiDeletePathParams;

  @Metadata()
  queryParams: ArtistApiDeleteQueryParams;
}


export class ArtistApiDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
