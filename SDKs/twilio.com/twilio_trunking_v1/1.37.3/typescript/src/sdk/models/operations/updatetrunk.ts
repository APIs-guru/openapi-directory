import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateTrunkServerList = [
	"https://trunking.twilio.com",
] as const;


export class UpdateTrunkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateTrunkUpdateTrunkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CnamLookupEnabled;" })
  cnamLookupEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=DisasterRecoveryMethod;" })
  disasterRecoveryMethod?: UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=DisasterRecoveryUrl;" })
  disasterRecoveryUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=DomainName;" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Secure;" })
  secure?: boolean;

  @SpeakeasyMetadata({ data: "form, name=TransferCallerId;" })
  transferCallerId?: shared.TrunkEnumTransferCallerIdEnum;

  @SpeakeasyMetadata({ data: "form, name=TransferMode;" })
  transferMode?: shared.TrunkEnumTransferSettingEnum;
}


export class UpdateTrunkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateTrunkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateTrunkPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateTrunkUpdateTrunkRequest;

  @SpeakeasyMetadata()
  security: UpdateTrunkSecurity;
}


export class UpdateTrunkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trunkingV1Trunk?: shared.TrunkingV1Trunk;
}
