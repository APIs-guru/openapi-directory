import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CleanScanPagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scanId" })
  scanId: number;
}


export class CleanScanPageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CleanScanPagePathParams;
}


export class CleanScanPageResponse extends SpeakeasyBase {
  @Metadata()
  apiResponse?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
