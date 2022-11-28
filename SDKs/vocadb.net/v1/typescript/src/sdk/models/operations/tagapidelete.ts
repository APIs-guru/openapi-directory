import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagApiDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class TagApiDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hardDelete" })
  hardDelete?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class TagApiDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagApiDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: TagApiDeleteQueryParams;
}


export class TagApiDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
