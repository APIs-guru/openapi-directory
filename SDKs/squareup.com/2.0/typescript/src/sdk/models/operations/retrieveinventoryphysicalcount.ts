import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveInventoryPhysicalCountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=physical_count_id" })
  physicalCountId: string;
}


export class RetrieveInventoryPhysicalCountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveInventoryPhysicalCountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveInventoryPhysicalCountPathParams;

  @Metadata()
  security: RetrieveInventoryPhysicalCountSecurity;
}


export class RetrieveInventoryPhysicalCountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveInventoryPhysicalCountResponse?: shared.RetrieveInventoryPhysicalCountResponse;

  @Metadata()
  statusCode: number;
}
