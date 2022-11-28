import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopScanPagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scanId" })
  scanId: number;
}


export class StopScanPageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopScanPagePathParams;
}


export class StopScanPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponse?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
