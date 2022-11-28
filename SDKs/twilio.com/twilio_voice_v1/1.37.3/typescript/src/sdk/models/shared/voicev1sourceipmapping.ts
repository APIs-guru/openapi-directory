import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VoiceV1SourceIpMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=ip_record_sid" })
  ipRecordSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sip_domain_sid" })
  sipDomainSid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
