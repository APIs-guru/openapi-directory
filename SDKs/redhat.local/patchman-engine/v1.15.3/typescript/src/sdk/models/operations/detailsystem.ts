import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DetailSystemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inventory_id" })
  inventoryId: string;
}


export class DetailSystemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class DetailSystemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DetailSystemPathParams;

  @SpeakeasyMetadata()
  security: DetailSystemSecurity;
}


export class DetailSystemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  controllersSystemDetailResponse?: shared.ControllersSystemDetailResponse;
}
