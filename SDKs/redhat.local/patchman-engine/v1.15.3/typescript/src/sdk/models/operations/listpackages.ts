import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListPackagesSortEnum {
    Id = "id",
    Name = "name",
    SystemsInstalled = "systems_installed",
    SystemsUpdatable = "systems_updatable"
}


export class ListPackagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[name]" })
  filterName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[summary]" })
  filterSummary?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_sids][in]" })
  filterSystemProfileSapSidsIn?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_system]" })
  filterSystemProfileSapSystem?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[systems_installed]" })
  filterSystemsInstalled?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[systems_updatable]" })
  filterSystemsUpdatable?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListPackagesSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string[];
}


export class ListPackagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ListPackagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPackagesQueryParams;

  @SpeakeasyMetadata()
  security: ListPackagesSecurity;
}


export class ListPackagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  controllersPackagesResponse?: shared.ControllersPackagesResponse;
}
