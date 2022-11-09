import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InstitutionsGetByIdRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.InstitutionsGetByIdRequest;
}


export class InstitutionsGetByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  institutionsGetByIdResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
