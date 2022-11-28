import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReleaseEventSeriesApiDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ReleaseEventSeriesApiDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hardDelete" })
  hardDelete?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class ReleaseEventSeriesApiDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReleaseEventSeriesApiDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: ReleaseEventSeriesApiDeleteQueryParams;
}


export class ReleaseEventSeriesApiDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
