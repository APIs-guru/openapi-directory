import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPatientManagementPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=identifierId" })
  identifierId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetPatientManagementRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientManagementPathParams;
}


export class GetPatientManagementResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  patientManagement?: shared.PatientManagement;

  @Metadata()
  statusCode: number;
}
