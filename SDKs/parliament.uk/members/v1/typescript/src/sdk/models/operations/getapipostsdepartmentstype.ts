import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiPostsDepartmentsTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: number;
}


export class GetApiPostsDepartmentsTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiPostsDepartmentsTypePathParams;
}


export class GetApiPostsDepartmentsTypeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.GovernmentDepartment })
  governmentDepartments?: shared.GovernmentDepartment[];

  @Metadata()
  statusCode: number;
}
