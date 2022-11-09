import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @Metadata({ data: "json, name=html" })
  html?: string;

  @Metadata({ data: "json, name=htmlmode" })
  htmlmode?: boolean;

  @Metadata({ data: "json, name=title" })
  title: string;
}
