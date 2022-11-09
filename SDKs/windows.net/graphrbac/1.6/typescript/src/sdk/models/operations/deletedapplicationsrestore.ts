import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeletedApplicationsRestorePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class DeletedApplicationsRestoreQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class DeletedApplicationsRestoreRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletedApplicationsRestorePathParams;

  @Metadata()
  queryParams: DeletedApplicationsRestoreQueryParams;
}


export class DeletedApplicationsRestoreResponse extends SpeakeasyBase {
  @Metadata()
  application?: Map<string, Map<string, any>>;

  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
