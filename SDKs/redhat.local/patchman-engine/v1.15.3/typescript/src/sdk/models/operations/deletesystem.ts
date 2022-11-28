import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeletesystemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inventory_id" })
  inventoryId: string;
}


export class DeletesystemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class DeletesystemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletesystemPathParams;

  @SpeakeasyMetadata()
  security: DeletesystemSecurity;
}


export class DeletesystemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
