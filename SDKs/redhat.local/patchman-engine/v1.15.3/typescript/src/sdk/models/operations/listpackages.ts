import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListPackagesSortEnum {
    Id = "id"
,    Name = "name"
,    SystemsInstalled = "systems_installed"
,    SystemsUpdatable = "systems_updatable"
}


export class ListPackagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[name]" })
  filterName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[summary]" })
  filterSummary?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_sids][in]" })
  filterSystemProfileSapSidsIn?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_system]" })
  filterSystemProfileSapSystem?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[systems_installed]" })
  filterSystemsInstalled?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[systems_updatable]" })
  filterSystemsUpdatable?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListPackagesSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string[];
}


export class ListPackagesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ListPackagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPackagesQueryParams;

  @Metadata()
  security: ListPackagesSecurity;
}


export class ListPackagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  controllersPackagesResponse?: shared.ControllersPackagesResponse;
}
