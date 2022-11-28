import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServicePrincipalsListOwnersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsListOwnersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsListOwnersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ServicePrincipalsListOwnersPathParams;

  @SpeakeasyMetadata()
  queryParams: ServicePrincipalsListOwnersQueryParams;
}


export class ServicePrincipalsListOwnersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directoryObjectListResult?: shared.DirectoryObjectListResult;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
