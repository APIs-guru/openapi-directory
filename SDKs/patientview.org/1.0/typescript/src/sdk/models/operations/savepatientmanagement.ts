import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SavePatientManagementPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=identifierId" })
  identifierId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class SavePatientManagementRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SavePatientManagementPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.PatientManagement;
}


export class SavePatientManagementResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
