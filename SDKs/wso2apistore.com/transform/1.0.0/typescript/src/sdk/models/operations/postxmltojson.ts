import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostXmltojsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request: string;
}


export class PostXmltojsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
