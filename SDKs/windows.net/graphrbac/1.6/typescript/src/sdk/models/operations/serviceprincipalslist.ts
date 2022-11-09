import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServicePrincipalsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$filter" })
  dollarFilter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServicePrincipalsListPathParams;

  @Metadata()
  queryParams: ServicePrincipalsListQueryParams;
}


export class ServicePrincipalsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  servicePrincipalListResult?: shared.ServicePrincipalListResult;

  @Metadata()
  statusCode: number;
}
