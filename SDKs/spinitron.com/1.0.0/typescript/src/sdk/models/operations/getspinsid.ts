import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSpinsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetSpinsIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string[];
}


export class GetSpinsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpinsIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSpinsIdQueryParams;
}


export class GetSpinsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  spin?: shared.Spin;

  @SpeakeasyMetadata()
  statusCode: number;
}
