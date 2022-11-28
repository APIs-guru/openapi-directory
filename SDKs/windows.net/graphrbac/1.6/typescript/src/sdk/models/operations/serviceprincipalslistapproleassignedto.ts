import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServicePrincipalsListAppRoleAssignedToPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsListAppRoleAssignedToQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsListAppRoleAssignedToRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ServicePrincipalsListAppRoleAssignedToPathParams;

  @SpeakeasyMetadata()
  queryParams: ServicePrincipalsListAppRoleAssignedToQueryParams;
}


export class ServicePrincipalsListAppRoleAssignedToResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appRoleAssignmentListResult?: shared.AppRoleAssignmentListResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
