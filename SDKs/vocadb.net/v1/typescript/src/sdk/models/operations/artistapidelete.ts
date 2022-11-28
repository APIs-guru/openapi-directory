import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ArtistApiDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ArtistApiDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class ArtistApiDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArtistApiDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: ArtistApiDeleteQueryParams;
}


export class ArtistApiDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
