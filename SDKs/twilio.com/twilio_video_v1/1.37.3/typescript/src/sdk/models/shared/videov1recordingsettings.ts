import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VideoV1RecordingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=aws_credentials_sid" })
  awsCredentialsSid?: string;

  @SpeakeasyMetadata({ data: "json, name=aws_s3_url" })
  awsS3Url?: string;

  @SpeakeasyMetadata({ data: "json, name=aws_storage_enabled" })
  awsStorageEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryption_enabled" })
  encryptionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryption_key_sid" })
  encryptionKeySid?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
