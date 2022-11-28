import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CleanScanPagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scanId" })
  scanId: number;
}


export class CleanScanPageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CleanScanPagePathParams;
}


export class CleanScanPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponse?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
