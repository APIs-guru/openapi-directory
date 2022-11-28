import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SignedInUserListOwnedObjectsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class SignedInUserListOwnedObjectsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class SignedInUserListOwnedObjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SignedInUserListOwnedObjectsPathParams;

  @SpeakeasyMetadata()
  queryParams: SignedInUserListOwnedObjectsQueryParams;
}


export class SignedInUserListOwnedObjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directoryObjectListResult?: shared.DirectoryObjectListResult;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
