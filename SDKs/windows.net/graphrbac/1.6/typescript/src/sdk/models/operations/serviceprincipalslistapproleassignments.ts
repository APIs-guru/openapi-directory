import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServicePrincipalsListAppRoleAssignmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsListAppRoleAssignmentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsListAppRoleAssignmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServicePrincipalsListAppRoleAssignmentsPathParams;

  @Metadata()
  queryParams: ServicePrincipalsListAppRoleAssignmentsQueryParams;
}


export class ServicePrincipalsListAppRoleAssignmentsResponse extends SpeakeasyBase {
  @Metadata()
  appRoleAssignmentListResult?: shared.AppRoleAssignmentListResult;

  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
