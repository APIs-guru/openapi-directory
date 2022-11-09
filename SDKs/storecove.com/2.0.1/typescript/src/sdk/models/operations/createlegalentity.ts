import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateLegalEntityRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CreateLegalEntityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModels?: any[];

  @Metadata()
  legalEntity?: shared.LegalEntity;

  @Metadata()
  statusCode: number;
}
