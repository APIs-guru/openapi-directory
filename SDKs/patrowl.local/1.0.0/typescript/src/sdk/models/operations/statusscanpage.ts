import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StatusScanPagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scanId" })
  scanId: number;
}


export class StatusScanPageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StatusScanPagePathParams;
}


export class StatusScanPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponse?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
