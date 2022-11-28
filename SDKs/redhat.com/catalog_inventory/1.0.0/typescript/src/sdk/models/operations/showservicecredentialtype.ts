import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ShowServiceCredentialTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowServiceCredentialTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ShowServiceCredentialTypePathParams;
}


export class ShowServiceCredentialTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorNotFound?: shared.ErrorNotFound;

  @SpeakeasyMetadata()
  serviceCredentialType?: shared.ServiceCredentialType;

  @SpeakeasyMetadata()
  statusCode: number;
}
