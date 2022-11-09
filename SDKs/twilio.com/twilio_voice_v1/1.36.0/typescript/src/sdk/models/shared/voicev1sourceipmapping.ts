import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VoiceV1SourceIpMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=ip_record_sid" })
  ipRecordSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sip_domain_sid" })
  sipDomainSid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
