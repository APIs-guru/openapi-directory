import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopScanPagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scanId" })
  scanId: number;
}


export class StopScanPageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopScanPagePathParams;
}


export class StopScanPageResponse extends SpeakeasyBase {
  @Metadata()
  apiResponse?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
