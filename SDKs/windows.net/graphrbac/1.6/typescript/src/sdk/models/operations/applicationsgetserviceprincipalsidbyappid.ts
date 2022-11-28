import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApplicationsGetServicePrincipalsIdByAppIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationID" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsGetServicePrincipalsIdByAppIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsGetServicePrincipalsIdByAppIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApplicationsGetServicePrincipalsIdByAppIdPathParams;

  @SpeakeasyMetadata()
  queryParams: ApplicationsGetServicePrincipalsIdByAppIdQueryParams;
}


export class ApplicationsGetServicePrincipalsIdByAppIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  servicePrincipalObjectResult?: shared.ServicePrincipalObjectResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
