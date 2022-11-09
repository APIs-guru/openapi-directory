import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATETOLLFREEVERIFICATION_SERVERS = [
	"https://messaging.twilio.com",
];



export class CreateTollfreeVerificationCreateTollfreeVerificationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AdditionalInformation;" })
  additionalInformation?: string;

  @Metadata({ data: "form, name=BusinessCity;" })
  businessCity?: string;

  @Metadata({ data: "form, name=BusinessContactEmail;" })
  businessContactEmail?: string;

  @Metadata({ data: "form, name=BusinessContactFirstName;" })
  businessContactFirstName?: string;

  @Metadata({ data: "form, name=BusinessContactLastName;" })
  businessContactLastName?: string;

  @Metadata({ data: "form, name=BusinessContactPhone;" })
  businessContactPhone?: string;

  @Metadata({ data: "form, name=BusinessCountry;" })
  businessCountry?: string;

  @Metadata({ data: "form, name=BusinessName;" })
  businessName: string;

  @Metadata({ data: "form, name=BusinessPostalCode;" })
  businessPostalCode?: string;

  @Metadata({ data: "form, name=BusinessStateProvinceRegion;" })
  businessStateProvinceRegion?: string;

  @Metadata({ data: "form, name=BusinessStreetAddress;" })
  businessStreetAddress?: string;

  @Metadata({ data: "form, name=BusinessStreetAddress2;" })
  businessStreetAddress2?: string;

  @Metadata({ data: "form, name=BusinessWebsite;" })
  businessWebsite: string;

  @Metadata({ data: "form, name=CustomerProfileSid;" })
  customerProfileSid?: string;

  @Metadata({ data: "form, name=MessageVolume;" })
  messageVolume: string;

  @Metadata({ data: "form, name=NotificationEmail;" })
  notificationEmail: string;

  @Metadata({ data: "form, name=OptInImageUrls;" })
  optInImageUrls: string[];

  @Metadata({ data: "form, name=OptInType;" })
  optInType: shared.TollfreeVerificationEnumOptInTypeEnum;

  @Metadata({ data: "form, name=ProductionMessageSample;" })
  productionMessageSample: string;

  @Metadata({ data: "form, name=TollfreePhoneNumberSid;" })
  tollfreePhoneNumberSid: string;

  @Metadata({ data: "form, name=UseCaseCategories;" })
  useCaseCategories: string[];

  @Metadata({ data: "form, name=UseCaseSummary;" })
  useCaseSummary: string;
}


export class CreateTollfreeVerificationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTollfreeVerificationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTollfreeVerificationCreateTollfreeVerificationRequest;

  @Metadata()
  security: CreateTollfreeVerificationSecurity;
}


export class CreateTollfreeVerificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  messagingV1TollfreeVerification?: shared.MessagingV1TollfreeVerification;
}
