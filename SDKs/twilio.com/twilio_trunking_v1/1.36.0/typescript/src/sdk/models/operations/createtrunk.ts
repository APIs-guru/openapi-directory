import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATETRUNK_SERVERS = [
	"https://trunking.twilio.com",
];


export enum CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateTrunkCreateTrunkRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CnamLookupEnabled;" })
  cnamLookupEnabled?: boolean;

  @Metadata({ data: "form, name=DisasterRecoveryMethod;" })
  disasterRecoveryMethod?: CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum;

  @Metadata({ data: "form, name=DisasterRecoveryUrl;" })
  disasterRecoveryUrl?: string;

  @Metadata({ data: "form, name=DomainName;" })
  domainName?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=Secure;" })
  secure?: boolean;

  @Metadata({ data: "form, name=TransferCallerId;" })
  transferCallerId?: shared.TrunkEnumTransferCallerIdEnum;

  @Metadata({ data: "form, name=TransferMode;" })
  transferMode?: shared.TrunkEnumTransferSettingEnum;
}


export class CreateTrunkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTrunkRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTrunkCreateTrunkRequest;

  @Metadata()
  security: CreateTrunkSecurity;
}


export class CreateTrunkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trunkingV1Trunk?: shared.TrunkingV1Trunk;
}
