import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetShowsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetShowsIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string[];
}


export class GetShowsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetShowsIdPathParams;

  @Metadata()
  queryParams: GetShowsIdQueryParams;
}


export class GetShowsIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  show?: shared.Show;

  @Metadata()
  statusCode: number;
}
