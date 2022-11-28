import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPatientManagementPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=identifierId" })
  identifierId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetPatientManagementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPatientManagementPathParams;
}


export class GetPatientManagementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientManagement?: shared.PatientManagement;

  @SpeakeasyMetadata()
  statusCode: number;
}
