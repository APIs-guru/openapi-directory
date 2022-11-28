import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostJsontoxmlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string;
}


export class PostJsontoxmlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
