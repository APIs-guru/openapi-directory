import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SystemPackagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inventory_id" })
  inventoryId: string;
}


export class SystemPackagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[description]" })
  filterDescription?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[evra]" })
  filterEvra?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[name]" })
  filterName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[summary]" })
  filterSummary?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[updatable]" })
  filterUpdatable?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class SystemPackagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class SystemPackagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SystemPackagesPathParams;

  @SpeakeasyMetadata()
  queryParams: SystemPackagesQueryParams;

  @SpeakeasyMetadata()
  security: SystemPackagesSecurity;
}


export class SystemPackagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  controllersSystemPackageResponse?: shared.ControllersSystemPackageResponse;
}
