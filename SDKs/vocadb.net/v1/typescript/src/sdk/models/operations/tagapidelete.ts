import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagApiDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class TagApiDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=hardDelete" })
  hardDelete?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class TagApiDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagApiDeletePathParams;

  @Metadata()
  queryParams: TagApiDeleteQueryParams;
}


export class TagApiDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
