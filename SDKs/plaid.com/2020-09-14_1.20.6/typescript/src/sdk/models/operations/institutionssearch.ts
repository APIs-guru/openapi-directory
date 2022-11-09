import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InstitutionsSearchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.InstitutionsSearchRequest;
}


export class InstitutionsSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  institutionsSearchResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
