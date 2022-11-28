import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportPackageSystemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;
}


export class ExportPackageSystemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_sids][in]" })
  filterSystemProfileSapSidsIn?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_system]" })
  filterSystemProfileSapSystem?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string[];
}


export class ExportPackageSystemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ExportPackageSystemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExportPackageSystemsPathParams;

  @SpeakeasyMetadata()
  queryParams: ExportPackageSystemsQueryParams;

  @SpeakeasyMetadata()
  security: ExportPackageSystemsSecurity;
}


export class ExportPackageSystemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.ControllersPackageSystemItem })
  controllersPackageSystemItems?: shared.ControllersPackageSystemItem[];
}
