import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SystemPackagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=inventory_id" })
  inventoryId: string;
}


export class SystemPackagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[description]" })
  filterDescription?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[evra]" })
  filterEvra?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[name]" })
  filterName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[summary]" })
  filterSummary?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[updatable]" })
  filterUpdatable?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class SystemPackagesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class SystemPackagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SystemPackagesPathParams;

  @Metadata()
  queryParams: SystemPackagesQueryParams;

  @Metadata()
  security: SystemPackagesSecurity;
}


export class SystemPackagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  controllersSystemPackageResponse?: shared.ControllersSystemPackageResponse;
}
