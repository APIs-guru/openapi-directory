import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeletesystemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=inventory_id" })
  inventoryId: string;
}


export class DeletesystemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class DeletesystemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletesystemPathParams;

  @Metadata()
  security: DeletesystemSecurity;
}


export class DeletesystemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
