import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEBUNDLE_SERVERS = [
	"https://numbers.twilio.com",
];



export class CreateBundleCreateBundleRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Email;" })
  email: string;

  @Metadata({ data: "form, name=EndUserType;" })
  endUserType?: shared.BundleEnumEndUserTypeEnum;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=IsoCountry;" })
  isoCountry?: string;

  @Metadata({ data: "form, name=NumberType;" })
  numberType?: string;

  @Metadata({ data: "form, name=RegulationSid;" })
  regulationSid?: string;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;
}


export class CreateBundleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateBundleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateBundleCreateBundleRequest;

  @Metadata()
  security: CreateBundleSecurity;
}


export class CreateBundleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  numbersV2RegulatoryComplianceBundle?: shared.NumbersV2RegulatoryComplianceBundle;
}
