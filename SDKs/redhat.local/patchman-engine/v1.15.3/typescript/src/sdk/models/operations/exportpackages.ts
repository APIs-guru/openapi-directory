import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ExportPackagesSortEnum {
    Id = "id",
    Name = "name",
    SystemsInstalled = "systems_installed",
    SystemsUpdatable = "systems_updatable"
}


export class ExportPackagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[name]" })
  filterName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[summary]" })
  filterSummary?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[systems_installed]" })
  filterSystemsInstalled?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[systems_updatable]" })
  filterSystemsUpdatable?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ExportPackagesSortEnum;
}


export class ExportPackagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ExportPackagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExportPackagesQueryParams;

  @SpeakeasyMetadata()
  security: ExportPackagesSecurity;
}


export class ExportPackagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.ControllersPackageItem })
  controllersPackageItems?: shared.ControllersPackageItem[];
}
