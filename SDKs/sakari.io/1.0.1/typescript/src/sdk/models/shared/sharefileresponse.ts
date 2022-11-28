import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ShareFileResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expires" })
  expires?: Date;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;
}


export class ShareFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ShareFileResponseData;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
