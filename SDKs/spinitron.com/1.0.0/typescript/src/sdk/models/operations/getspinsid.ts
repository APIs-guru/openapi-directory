import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSpinsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetSpinsIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string[];
}


export class GetSpinsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpinsIdPathParams;

  @Metadata()
  queryParams: GetSpinsIdQueryParams;
}


export class GetSpinsIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  spin?: shared.Spin;

  @Metadata()
  statusCode: number;
}
