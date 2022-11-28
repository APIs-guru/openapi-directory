import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFiltersFiltersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=filters" })
  filters: string;
}


export class GetFiltersFiltersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFiltersFiltersPathParams;
}


export class GetFiltersFiltersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
