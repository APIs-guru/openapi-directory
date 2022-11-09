import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReleaseEventSeriesApiDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ReleaseEventSeriesApiDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=hardDelete" })
  hardDelete?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class ReleaseEventSeriesApiDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReleaseEventSeriesApiDeletePathParams;

  @Metadata()
  queryParams: ReleaseEventSeriesApiDeleteQueryParams;
}


export class ReleaseEventSeriesApiDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
