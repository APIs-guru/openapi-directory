import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VideoV1RecordingSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=aws_credentials_sid" })
  awsCredentialsSid?: string;

  @Metadata({ data: "json, name=aws_s3_url" })
  awsS3Url?: string;

  @Metadata({ data: "json, name=aws_storage_enabled" })
  awsStorageEnabled?: boolean;

  @Metadata({ data: "json, name=encryption_enabled" })
  encryptionEnabled?: boolean;

  @Metadata({ data: "json, name=encryption_key_sid" })
  encryptionKeySid?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
