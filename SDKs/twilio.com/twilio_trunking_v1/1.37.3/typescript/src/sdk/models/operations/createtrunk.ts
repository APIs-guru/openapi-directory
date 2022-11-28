import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateTrunkServerList = [
	"https://trunking.twilio.com",
] as const;

export enum CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateTrunkCreateTrunkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CnamLookupEnabled;" })
  cnamLookupEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=DisasterRecoveryMethod;" })
  disasterRecoveryMethod?: CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum;

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


export class CreateTrunkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTrunkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTrunkCreateTrunkRequest;

  @SpeakeasyMetadata()
  security: CreateTrunkSecurity;
}


export class CreateTrunkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trunkingV1Trunk?: shared.TrunkingV1Trunk;
}
