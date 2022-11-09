import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLegalEntityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UpdateLegalEntityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLegalEntityPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class UpdateLegalEntityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModels?: any[];

  @Metadata()
  legalEntity?: shared.LegalEntity;

  @Metadata()
  statusCode: number;
}
