import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServicePrincipalsListAppRoleAssignedToPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsListAppRoleAssignedToQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsListAppRoleAssignedToRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServicePrincipalsListAppRoleAssignedToPathParams;

  @Metadata()
  queryParams: ServicePrincipalsListAppRoleAssignedToQueryParams;
}


export class ServicePrincipalsListAppRoleAssignedToResponse extends SpeakeasyBase {
  @Metadata()
  appRoleAssignmentListResult?: shared.AppRoleAssignmentListResult;

  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
