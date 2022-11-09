import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DetailSystemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=inventory_id" })
  inventoryId: string;
}


export class DetailSystemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class DetailSystemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DetailSystemPathParams;

  @Metadata()
  security: DetailSystemSecurity;
}


export class DetailSystemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  controllersSystemDetailResponse?: shared.ControllersSystemDetailResponse;
}
