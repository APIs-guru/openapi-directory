import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ShareFileResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=expires" })
  expires?: Date;

  @Metadata({ data: "json, name=link" })
  link?: string;
}


export class ShareFileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: ShareFileResponseData;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
