import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveInventoryAdjustmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=adjustment_id" })
  adjustmentId: string;
}


export class RetrieveInventoryAdjustmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveInventoryAdjustmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveInventoryAdjustmentPathParams;

  @Metadata()
  security: RetrieveInventoryAdjustmentSecurity;
}


export class RetrieveInventoryAdjustmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveInventoryAdjustmentResponse?: shared.RetrieveInventoryAdjustmentResponse;

  @Metadata()
  statusCode: number;
}
