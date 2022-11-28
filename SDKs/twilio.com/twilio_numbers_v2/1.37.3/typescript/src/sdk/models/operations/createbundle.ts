import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateBundleServerList = [
	"https://numbers.twilio.com",
] as const;


export class CreateBundleCreateBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Email;" })
  email: string;

  @SpeakeasyMetadata({ data: "form, name=EndUserType;" })
  endUserType?: shared.BundleEnumEndUserTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=IsoCountry;" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "form, name=NumberType;" })
  numberType?: string;

  @SpeakeasyMetadata({ data: "form, name=RegulationSid;" })
  regulationSid?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;
}


export class CreateBundleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateBundleCreateBundleRequest;

  @SpeakeasyMetadata()
  security: CreateBundleSecurity;
}


export class CreateBundleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  numbersV2RegulatoryComplianceBundle?: shared.NumbersV2RegulatoryComplianceBundle;
}
