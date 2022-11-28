import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateRecordingSettingsServerList = [
	"https://video.twilio.com",
] as const;


export class CreateRecordingSettingsCreateRecordingSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AwsCredentialsSid;" })
  awsCredentialsSid?: string;

  @SpeakeasyMetadata({ data: "form, name=AwsS3Url;" })
  awsS3Url?: string;

  @SpeakeasyMetadata({ data: "form, name=AwsStorageEnabled;" })
  awsStorageEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=EncryptionEnabled;" })
  encryptionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=EncryptionKeySid;" })
  encryptionKeySid?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;
}


export class CreateRecordingSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateRecordingSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateRecordingSettingsCreateRecordingSettingsRequest;

  @SpeakeasyMetadata()
  security: CreateRecordingSettingsSecurity;
}


export class CreateRecordingSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoV1RecordingSettings?: shared.VideoV1RecordingSettings;
}
