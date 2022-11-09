import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeprecatedRetrieveInventoryAdjustmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=adjustment_id" })
  adjustmentId: string;
}


export class DeprecatedRetrieveInventoryAdjustmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeprecatedRetrieveInventoryAdjustmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeprecatedRetrieveInventoryAdjustmentPathParams;

  @Metadata()
  security: DeprecatedRetrieveInventoryAdjustmentSecurity;
}


export class DeprecatedRetrieveInventoryAdjustmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveInventoryAdjustmentResponse?: shared.RetrieveInventoryAdjustmentResponse;

  @Metadata()
  statusCode: number;
}
