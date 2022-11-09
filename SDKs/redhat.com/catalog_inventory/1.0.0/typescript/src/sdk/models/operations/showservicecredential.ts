import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ShowServiceCredentialPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowServiceCredentialRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ShowServiceCredentialPathParams;
}


export class ShowServiceCredentialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorNotFound?: shared.ErrorNotFound;

  @Metadata()
  serviceCredential?: shared.ServiceCredential;

  @Metadata()
  statusCode: number;
}
