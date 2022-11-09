import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveInventoryCountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=catalog_object_id" })
  catalogObjectId: string;
}


export class RetrieveInventoryCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location_ids" })
  locationIds?: string;
}


export class RetrieveInventoryCountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveInventoryCountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveInventoryCountPathParams;

  @Metadata()
  queryParams: RetrieveInventoryCountQueryParams;

  @Metadata()
  security: RetrieveInventoryCountSecurity;
}


export class RetrieveInventoryCountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveInventoryCountResponse?: shared.RetrieveInventoryCountResponse;

  @Metadata()
  statusCode: number;
}
