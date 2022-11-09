import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApplicationsGetServicePrincipalsIdByAppIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=applicationID" })
  applicationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsGetServicePrincipalsIdByAppIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsGetServicePrincipalsIdByAppIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApplicationsGetServicePrincipalsIdByAppIdPathParams;

  @Metadata()
  queryParams: ApplicationsGetServicePrincipalsIdByAppIdQueryParams;
}


export class ApplicationsGetServicePrincipalsIdByAppIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  servicePrincipalObjectResult?: shared.ServicePrincipalObjectResult;

  @Metadata()
  statusCode: number;
}
