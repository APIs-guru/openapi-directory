import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SavePatientManagementSurgeriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=identifierId" })
  identifierId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class SavePatientManagementSurgeriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SavePatientManagementSurgeriesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.PatientManagement;
}


export class SavePatientManagementSurgeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
