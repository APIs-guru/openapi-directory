import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEBUNDLE_SERVERS = [
	"https://numbers.twilio.com",
];



export class UpdateBundlePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateBundleUpdateBundleRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Email;" })
  email?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=Status;" })
  status?: shared.BundleEnumStatusEnum;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;
}


export class UpdateBundleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateBundleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateBundlePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateBundleUpdateBundleRequest;

  @Metadata()
  security: UpdateBundleSecurity;
}


export class UpdateBundleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  numbersV2RegulatoryComplianceBundle?: shared.NumbersV2RegulatoryComplianceBundle;
}
