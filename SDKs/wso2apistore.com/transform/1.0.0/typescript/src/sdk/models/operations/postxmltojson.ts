import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostXmltojsonRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=text/xml" })
  request: string;
}


export class PostXmltojsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
