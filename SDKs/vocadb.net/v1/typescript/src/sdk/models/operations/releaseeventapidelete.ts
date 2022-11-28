import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReleaseEventApiDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ReleaseEventApiDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hardDelete" })
  hardDelete?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class ReleaseEventApiDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReleaseEventApiDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: ReleaseEventApiDeleteQueryParams;
}


export class ReleaseEventApiDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
