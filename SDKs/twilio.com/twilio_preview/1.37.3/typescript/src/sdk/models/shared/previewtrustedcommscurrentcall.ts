import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewTrustedCommsCurrentCall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bg_color" })
  bgColor?: string;

  @SpeakeasyMetadata({ data: "json, name=caller" })
  caller?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=font_color" })
  fontColor?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=manager" })
  manager?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=shield_img" })
  shieldImg?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=use_case" })
  useCase?: string;
}
