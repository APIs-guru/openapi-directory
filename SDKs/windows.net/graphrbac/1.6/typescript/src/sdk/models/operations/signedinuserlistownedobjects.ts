import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SignedInUserListOwnedObjectsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class SignedInUserListOwnedObjectsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class SignedInUserListOwnedObjectsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SignedInUserListOwnedObjectsPathParams;

  @Metadata()
  queryParams: SignedInUserListOwnedObjectsQueryParams;
}


export class SignedInUserListOwnedObjectsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  directoryObjectListResult?: shared.DirectoryObjectListResult;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
