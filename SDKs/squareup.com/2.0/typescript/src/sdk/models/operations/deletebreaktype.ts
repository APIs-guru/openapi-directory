import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteBreakTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteBreakTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteBreakTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteBreakTypePathParams;

  @Metadata()
  security: DeleteBreakTypeSecurity;
}


export class DeleteBreakTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteBreakTypeResponse?: shared.DeleteBreakTypeResponse;

  @Metadata()
  statusCode: number;
}
