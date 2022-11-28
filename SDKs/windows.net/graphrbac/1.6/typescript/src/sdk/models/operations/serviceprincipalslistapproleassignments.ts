import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServicePrincipalsListAppRoleAssignmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsListAppRoleAssignmentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsListAppRoleAssignmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ServicePrincipalsListAppRoleAssignmentsPathParams;

  @SpeakeasyMetadata()
  queryParams: ServicePrincipalsListAppRoleAssignmentsQueryParams;
}


export class ServicePrincipalsListAppRoleAssignmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appRoleAssignmentListResult?: shared.AppRoleAssignmentListResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
