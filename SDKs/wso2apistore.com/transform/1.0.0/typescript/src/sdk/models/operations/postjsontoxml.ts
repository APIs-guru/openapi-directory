import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostJsontoxmlRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: string;
}


export class PostJsontoxmlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
