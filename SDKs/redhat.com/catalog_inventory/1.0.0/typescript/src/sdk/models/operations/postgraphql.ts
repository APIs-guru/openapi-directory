import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostGraphQlRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GraphQlRequest;
}


export class PostGraphQlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphQlResponse?: shared.GraphQlResponse;

  @Metadata()
  statusCode: number;
}
