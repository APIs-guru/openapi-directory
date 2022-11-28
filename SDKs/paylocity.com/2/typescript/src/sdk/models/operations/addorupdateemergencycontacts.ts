import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddOrUpdateEmergencyContactsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class AddOrUpdateEmergencyContactsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class AddOrUpdateEmergencyContactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddOrUpdateEmergencyContactsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.EmergencyContact;

  @SpeakeasyMetadata()
  security: AddOrUpdateEmergencyContactsSecurity;
}


export class AddOrUpdateEmergencyContactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
