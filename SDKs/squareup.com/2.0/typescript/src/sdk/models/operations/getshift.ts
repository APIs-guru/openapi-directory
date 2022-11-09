import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetShiftPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetShiftSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetShiftRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetShiftPathParams;

  @Metadata()
  security: GetShiftSecurity;
}


export class GetShiftResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getShiftResponse?: shared.GetShiftResponse;

  @Metadata()
  statusCode: number;
}
