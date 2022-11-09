import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportSystemPackagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=inventory_id" })
  inventoryId: string;
}


export class ExportSystemPackagesQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportSystemPackagesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ExportSystemPackagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExportSystemPackagesPathParams;

  @Metadata()
  queryParams: ExportSystemPackagesQueryParams;

  @Metadata()
  security: ExportSystemPackagesSecurity;
}


export class ExportSystemPackagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.ControllersSystemPackageInline })
  controllersSystemPackageInlines?: shared.ControllersSystemPackageInline[];
}
