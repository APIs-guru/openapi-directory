import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiReferenceDepartmentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameContains" })
  nameContains?: string;
}


export class GetApiReferenceDepartmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiReferenceDepartmentsQueryParams;
}


export class GetApiReferenceDepartmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GovernmentDepartment })
  governmentDepartments?: shared.GovernmentDepartment[];

  @SpeakeasyMetadata()
  statusCode: number;
}
