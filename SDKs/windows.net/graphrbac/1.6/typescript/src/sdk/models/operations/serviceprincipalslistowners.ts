import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServicePrincipalsListOwnersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsListOwnersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsListOwnersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServicePrincipalsListOwnersPathParams;

  @Metadata()
  queryParams: ServicePrincipalsListOwnersQueryParams;
}


export class ServicePrincipalsListOwnersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  directoryObjectListResult?: shared.DirectoryObjectListResult;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
