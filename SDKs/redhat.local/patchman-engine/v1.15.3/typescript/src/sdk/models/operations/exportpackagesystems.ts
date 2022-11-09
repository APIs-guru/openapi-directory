import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportPackageSystemsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;
}


export class ExportPackageSystemsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_sids][in]" })
  filterSystemProfileSapSidsIn?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_system]" })
  filterSystemProfileSapSystem?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string[];
}


export class ExportPackageSystemsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ExportPackageSystemsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExportPackageSystemsPathParams;

  @Metadata()
  queryParams: ExportPackageSystemsQueryParams;

  @Metadata()
  security: ExportPackageSystemsSecurity;
}


export class ExportPackageSystemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.ControllersPackageSystemItem })
  controllersPackageSystemItems?: shared.ControllersPackageSystemItem[];
}
