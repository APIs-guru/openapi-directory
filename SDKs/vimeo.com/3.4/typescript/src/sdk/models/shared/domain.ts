import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Domain extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_hd" })
  allowHd: boolean;

  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}
