import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Domain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_hd" })
  allowHd: boolean;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}
