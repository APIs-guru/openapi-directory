import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ShowServiceCredentialPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowServiceCredentialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ShowServiceCredentialPathParams;
}


export class ShowServiceCredentialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorNotFound?: shared.ErrorNotFound;

  @SpeakeasyMetadata()
  serviceCredential?: shared.ServiceCredential;

  @SpeakeasyMetadata()
  statusCode: number;
}
