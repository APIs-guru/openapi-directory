import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreviewTrustedCommsCurrentCall extends SpeakeasyBase {
  @Metadata({ data: "json, name=bg_color" })
  bgColor?: string;

  @Metadata({ data: "json, name=caller" })
  caller?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=font_color" })
  fontColor?: string;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=logo" })
  logo?: string;

  @Metadata({ data: "json, name=manager" })
  manager?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=shield_img" })
  shieldImg?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=use_case" })
  useCase?: string;
}
