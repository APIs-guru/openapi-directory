import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveInventoryChangesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=catalog_object_id" })
  catalogObjectId: string;
}


export class RetrieveInventoryChangesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location_ids" })
  locationIds?: string;
}


export class RetrieveInventoryChangesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveInventoryChangesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveInventoryChangesPathParams;

  @Metadata()
  queryParams: RetrieveInventoryChangesQueryParams;

  @Metadata()
  security: RetrieveInventoryChangesSecurity;
}


export class RetrieveInventoryChangesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveInventoryChangesResponse?: shared.RetrieveInventoryChangesResponse;

  @Metadata()
  statusCode: number;
}
