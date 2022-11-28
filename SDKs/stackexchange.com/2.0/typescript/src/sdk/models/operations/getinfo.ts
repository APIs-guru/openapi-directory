import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;
}


export class GetInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetInfoQueryParams;
}


export class GetInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
