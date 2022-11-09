import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateCustomTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class UpdateCustomTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.CreateConfigInput;

  @Metadata()
  security: UpdateCustomTypeSecurity;
}


export class UpdateCustomTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
