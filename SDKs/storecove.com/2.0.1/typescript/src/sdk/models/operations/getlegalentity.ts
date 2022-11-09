import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLegalEntityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetLegalEntityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLegalEntityPathParams;
}


export class GetLegalEntityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  legalEntity?: shared.LegalEntity;

  @Metadata()
  statusCode: number;
}
