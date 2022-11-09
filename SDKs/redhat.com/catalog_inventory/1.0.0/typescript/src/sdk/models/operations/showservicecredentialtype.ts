import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ShowServiceCredentialTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowServiceCredentialTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ShowServiceCredentialTypePathParams;
}


export class ShowServiceCredentialTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorNotFound?: shared.ErrorNotFound;

  @Metadata()
  serviceCredentialType?: shared.ServiceCredentialType;

  @Metadata()
  statusCode: number;
}
