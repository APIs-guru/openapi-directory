import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=html" })
  html?: string;

  @SpeakeasyMetadata({ data: "json, name=htmlmode" })
  htmlmode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
