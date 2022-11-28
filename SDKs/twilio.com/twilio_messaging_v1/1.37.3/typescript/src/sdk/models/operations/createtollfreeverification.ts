import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateTollfreeVerificationServerList = [
	"https://messaging.twilio.com",
] as const;


export class CreateTollfreeVerificationCreateTollfreeVerificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AdditionalInformation;" })
  additionalInformation?: string;

  @SpeakeasyMetadata({ data: "form, name=BusinessCity;" })
  businessCity?: string;

  @SpeakeasyMetadata({ data: "form, name=BusinessContactEmail;" })
  businessContactEmail?: string;

  @SpeakeasyMetadata({ data: "form, name=BusinessContactFirstName;" })
  businessContactFirstName?: string;

  @SpeakeasyMetadata({ data: "form, name=BusinessContactLastName;" })
  businessContactLastName?: string;

  @SpeakeasyMetadata({ data: "form, name=BusinessContactPhone;" })
  businessContactPhone?: string;

  @SpeakeasyMetadata({ data: "form, name=BusinessCountry;" })
  businessCountry?: string;

  @SpeakeasyMetadata({ data: "form, name=BusinessName;" })
  businessName: string;

  @SpeakeasyMetadata({ data: "form, name=BusinessPostalCode;" })
  businessPostalCode?: string;

  @SpeakeasyMetadata({ data: "form, name=BusinessStateProvinceRegion;" })
  businessStateProvinceRegion?: string;

  @SpeakeasyMetadata({ data: "form, name=BusinessStreetAddress;" })
  businessStreetAddress?: string;

  @SpeakeasyMetadata({ data: "form, name=BusinessStreetAddress2;" })
  businessStreetAddress2?: string;

  @SpeakeasyMetadata({ data: "form, name=BusinessWebsite;" })
  businessWebsite: string;

  @SpeakeasyMetadata({ data: "form, name=CustomerProfileSid;" })
  customerProfileSid?: string;

  @SpeakeasyMetadata({ data: "form, name=MessageVolume;" })
  messageVolume: string;

  @SpeakeasyMetadata({ data: "form, name=NotificationEmail;" })
  notificationEmail: string;

  @SpeakeasyMetadata({ data: "form, name=OptInImageUrls;" })
  optInImageUrls: string[];

  @SpeakeasyMetadata({ data: "form, name=OptInType;" })
  optInType: shared.TollfreeVerificationEnumOptInTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=ProductionMessageSample;" })
  productionMessageSample: string;

  @SpeakeasyMetadata({ data: "form, name=TollfreePhoneNumberSid;" })
  tollfreePhoneNumberSid: string;

  @SpeakeasyMetadata({ data: "form, name=UseCaseCategories;" })
  useCaseCategories: string[];

  @SpeakeasyMetadata({ data: "form, name=UseCaseSummary;" })
  useCaseSummary: string;
}


export class CreateTollfreeVerificationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTollfreeVerificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTollfreeVerificationCreateTollfreeVerificationRequest;

  @SpeakeasyMetadata()
  security: CreateTollfreeVerificationSecurity;
}


export class CreateTollfreeVerificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  messagingV1TollfreeVerification?: shared.MessagingV1TollfreeVerification;
}
