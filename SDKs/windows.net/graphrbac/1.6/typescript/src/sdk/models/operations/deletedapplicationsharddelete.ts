import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeletedApplicationsHardDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" })
  applicationObjectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class DeletedApplicationsHardDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class DeletedApplicationsHardDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletedApplicationsHardDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: DeletedApplicationsHardDeleteQueryParams;
}


export class DeletedApplicationsHardDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
