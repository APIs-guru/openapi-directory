import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiPostsDepartmentsTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: number;
}


export class GetApiPostsDepartmentsTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiPostsDepartmentsTypePathParams;
}


export class GetApiPostsDepartmentsTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GovernmentDepartment })
  governmentDepartments?: shared.GovernmentDepartment[];

  @SpeakeasyMetadata()
  statusCode: number;
}
