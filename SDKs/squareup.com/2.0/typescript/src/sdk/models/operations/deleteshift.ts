import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteShiftPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteShiftSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteShiftRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteShiftPathParams;

  @Metadata()
  security: DeleteShiftSecurity;
}


export class DeleteShiftResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteShiftResponse?: shared.DeleteShiftResponse;

  @Metadata()
  statusCode: number;
}
