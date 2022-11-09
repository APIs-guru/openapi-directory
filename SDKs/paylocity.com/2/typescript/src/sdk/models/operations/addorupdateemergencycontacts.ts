import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddOrUpdateEmergencyContactsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class AddOrUpdateEmergencyContactsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class AddOrUpdateEmergencyContactsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddOrUpdateEmergencyContactsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EmergencyContact;

  @Metadata()
  security: AddOrUpdateEmergencyContactsSecurity;
}


export class AddOrUpdateEmergencyContactsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
