import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATETRUNK_SERVERS = [
	"https://trunking.twilio.com",
];



export class UpdateTrunkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class UpdateTrunkUpdateTrunkRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CnamLookupEnabled;" })
  cnamLookupEnabled?: boolean;

  @Metadata({ data: "form, name=DisasterRecoveryMethod;" })
  disasterRecoveryMethod?: UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum;

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


export class UpdateTrunkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateTrunkRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateTrunkPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateTrunkUpdateTrunkRequest;

  @Metadata()
  security: UpdateTrunkSecurity;
}


export class UpdateTrunkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trunkingV1Trunk?: shared.TrunkingV1Trunk;
}
