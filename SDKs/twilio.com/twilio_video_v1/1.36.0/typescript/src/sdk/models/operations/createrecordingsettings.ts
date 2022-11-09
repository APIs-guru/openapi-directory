import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATERECORDINGSETTINGS_SERVERS = [
	"https://video.twilio.com",
];



export class CreateRecordingSettingsCreateRecordingSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AwsCredentialsSid;" })
  awsCredentialsSid?: string;

  @Metadata({ data: "form, name=AwsS3Url;" })
  awsS3Url?: string;

  @Metadata({ data: "form, name=AwsStorageEnabled;" })
  awsStorageEnabled?: boolean;

  @Metadata({ data: "form, name=EncryptionEnabled;" })
  encryptionEnabled?: boolean;

  @Metadata({ data: "form, name=EncryptionKeySid;" })
  encryptionKeySid?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;
}


export class CreateRecordingSettingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateRecordingSettingsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateRecordingSettingsCreateRecordingSettingsRequest;

  @Metadata()
  security: CreateRecordingSettingsSecurity;
}


export class CreateRecordingSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoV1RecordingSettings?: shared.VideoV1RecordingSettings;
}
