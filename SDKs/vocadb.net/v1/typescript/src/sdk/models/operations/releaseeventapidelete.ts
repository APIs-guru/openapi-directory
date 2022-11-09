import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReleaseEventApiDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ReleaseEventApiDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=hardDelete" })
  hardDelete?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class ReleaseEventApiDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReleaseEventApiDeletePathParams;

  @Metadata()
  queryParams: ReleaseEventApiDeleteQueryParams;
}


export class ReleaseEventApiDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
