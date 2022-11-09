import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeprecatedRetrieveInventoryPhysicalCountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=physical_count_id" })
  physicalCountId: string;
}


export class DeprecatedRetrieveInventoryPhysicalCountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeprecatedRetrieveInventoryPhysicalCountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeprecatedRetrieveInventoryPhysicalCountPathParams;

  @Metadata()
  security: DeprecatedRetrieveInventoryPhysicalCountSecurity;
}


export class DeprecatedRetrieveInventoryPhysicalCountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveInventoryPhysicalCountResponse?: shared.RetrieveInventoryPhysicalCountResponse;

  @Metadata()
  statusCode: number;
}
