import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiReferenceDepartmentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameContains" })
  nameContains?: string;
}


export class GetApiReferenceDepartmentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiReferenceDepartmentsQueryParams;
}


export class GetApiReferenceDepartmentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.GovernmentDepartment })
  governmentDepartments?: shared.GovernmentDepartment[];

  @Metadata()
  statusCode: number;
}
