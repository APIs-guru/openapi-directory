import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeletedApplicationsRestorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class DeletedApplicationsRestoreQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class DeletedApplicationsRestoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletedApplicationsRestorePathParams;

  @SpeakeasyMetadata()
  queryParams: DeletedApplicationsRestoreQueryParams;
}


export class DeletedApplicationsRestoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  application?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
