import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ExportPackagesSortEnum {
    Id = "id"
,    Name = "name"
,    SystemsInstalled = "systems_installed"
,    SystemsUpdatable = "systems_updatable"
}


export class ExportPackagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[name]" })
  filterName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[summary]" })
  filterSummary?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[systems_installed]" })
  filterSystemsInstalled?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[systems_updatable]" })
  filterSystemsUpdatable?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ExportPackagesSortEnum;
}


export class ExportPackagesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ExportPackagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ExportPackagesQueryParams;

  @Metadata()
  security: ExportPackagesSecurity;
}


export class ExportPackagesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.ControllersPackageItem })
  controllersPackageItems?: shared.ControllersPackageItem[];
}
