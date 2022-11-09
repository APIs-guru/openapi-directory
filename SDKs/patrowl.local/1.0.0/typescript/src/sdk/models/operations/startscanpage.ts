import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartScanPageRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class StartScanPageResponse extends SpeakeasyBase {
  @Metadata()
  apiResponse?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
