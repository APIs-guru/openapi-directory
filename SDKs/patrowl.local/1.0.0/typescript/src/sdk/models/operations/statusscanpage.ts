import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StatusScanPagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scanId" })
  scanId: number;
}


export class StatusScanPageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StatusScanPagePathParams;
}


export class StatusScanPageResponse extends SpeakeasyBase {
  @Metadata()
  apiResponse?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
