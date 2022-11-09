import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateShiftPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateShiftSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UpdateShiftRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateShiftPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateShiftRequest;

  @Metadata()
  security: UpdateShiftSecurity;
}


export class UpdateShiftResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateShiftResponse?: shared.UpdateShiftResponse;
}
